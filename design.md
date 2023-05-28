# Design

## 思想

- SQLを知っていれば使えるような、シンプルな設計にする。
- 簡単なクエリはライブラリが生成したクライアントで実行し、複雑なSQLは直接書く。prismaにsqlcやpg-typedを足したイメージ（pg-typedやsqlcはこれから使ってみる）
- コネクションの部分は抽象化しない（プーリングとかをあまり理解していないため）。drizzleみたいに、アダプタを用意して使えるようにしたい。
- マイグレーション部分は他のライブラリに任せる（sqldefなど）。TypeScriptの型はCREATE TABLE文から生成する。
- サーバーでもエッジでも動くようにしたい。

## クライアント・型の生成

MySQL

```sql
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
);

CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `authorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
    FOREIGN KEY `Post_authorId_fkey` (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
);

CREATE TABLE `PostTag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    UNIQUE INDEX `PostTag_postId_tagId_key`(`postId`, `tagId`),
    PRIMARY KEY (`id`)
    FOREIGN KEY `PostTag_postId_fkey` (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
);

CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    FOREIGN KEY `PostTag_tagId_fkey` (`tagId`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
    PRIMARY KEY (`id`)
);
```

<details>
<summary>同等のPrisma Schema</summary>

```ts
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int       @id @default(autoincrement())
  title     String
  content   String?
  published Boolean   @default(false)
  author    User      @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime  @default(now())
  postTags  PostTag[]
}

model PostTag {
  id     Int  @id @default(autoincrement())
  postId Int
  post   Post @relation(fields: [postId], references: [id])
  tagId  Int
  tag    Tag  @relation(fields: [tagId], references: [id])

  @@unique(fields: [postId, tagId])
}

model Tag {
  id       Int       @id @default(autoincrement())
  name     String    @unique @db.VarChar(16)
  postTags PostTag[]
}
```

</details>

```bash
$ liorm generate
```

[生成される型（一部）](https://www.typescriptlang.org/play?ssl=183&ssc=1&pln=184&pc=1#code/C4TwDgpgBAkgdsAYgSwDbAgJygXigVzgBMIAzZOCIgbgChRIoBlYTCgcxXS1wOLIpU6DaCzZx2AOXypUAQwBGqCFwzY8hEuUo1a9cNABCc4AGMAFgAU5IVAHs5RXgG9aUd1FN3CwAFxQ4fABbBSw6AF89AHooqCC7ElR9RgBVAGcePFcPKGQif0CQrAAaNw8IILk0fzTWDlKcuDkgiBq6iSgAHwCZVFLI2ggADzA7TGAoEShLO1qXMryC4NDMMuBkYGU28XYysHwlZDTzKn8FOztlOTgyuXxgczGYfJ6i1YGYuPuTZDs4XLg+2AyWg6SwAGFMBATBB4ED5jk8gB+JZvBrlSrVKC1Hbo9xNFoo7HtdhdHqyfp6KZgzApMBEGFw+4IjFVVBEnH1Mr45oQDkksmBCm0D6xADuJyhAKBIKgNIA6pKIPKNo97gAlCDydZ-JkTLLc3JEInwJBoNSC5ZYQ0VNlEsQcVQ8bqciSGgl8-wOiTSWSKZRO7AugXdIVJSLUjKYRVYCApODIACO+GVqu8wE12t+cD1LPcyNRKzxUFtaCJhSLItlCqV8aTKdzeBrsbrydTD3TmZ+usB92EBjlUZjUMbg6ww-baozWu7Od7wDotE+gEB3QCmrrKZrUJ6Psh4C7AEIHLW9DetNp7mCSj8GdlWl7E7JBMLOoHJMOxghAEGlq1HIdCMAAQXfNIXCgBlgDkfwaX-Rl5ygCMBxgqEYQAWWuEBgPYUCsnAkwoLHTBYIwPUAG0AF0EN-LA6QgiAsJwqBnCgCVY2godawTNs9WKPDIPYmj6Tg+FENSKNaLQjCGLA1ioQE6MlR4viCJpCSSPnCiqMjLAABEtQgICQJkpV5InVsG3g0TQSjPTlAwdC4EwozcNk1pCO3SzqMwFBiHM+jnKYliTPczj61hSyoAAMkIxADIsBj+zErAfKIFBMFqaSXOC5sRwi6KaVisxzASryUocpzsOM2MiRy8KRKimK4uKkDFymTczWIcrMsC1yiXajz6ui9rCvilqqQHdqmH00x9SYw191YFNizPZQiUWiBizuDtMDWzAUzJAqmoYyk2tmYB4FMVB8BIFwrOmM6RuayqDRyDJlBmvqzqm97gGLChLuui92ouq6SEpLzvogGa8yNXalvdXk4Y2m1MXZfx1uLUZajSJGyWGigiC6sa7ppEHAZhrHgBx9G9ugbp8c6qTieiWIABUAHl2Z0gpmg4UqjoC3d3DeqHgBqqNIZmv64ABkhxawMmwbvKZJeAQDiEV6AXo8EWZv8QgAGs4DsMU4Gl2W3MN43TfB7TMAAcQM6xbAcIgAB5pOGDBiFAw6iuk7p1rJTQBB0AA+XhDU9oZvaIUCg6RQioF8KOjK9r84+Yaa1Y1mXQegROAHJLCuDIS1VHgLAuMuAANdeAGuoDGKAa-+-Oa8L5PU8q9OfcC+v5NVhCoCRQ0ciFnJJ9IywASgA2IBAOxSCgBjSML+vC-I8iU8n3fJ5n3vM8Lym0k7xP2sd4BnfsRwPZAteN-IteT83iOd73j+D5jjPQPnxfl5pCPQi09KLvw-rvSgAA3MIY8PDhC7jkaOsdQLMTboDeSmth6jw-hPD+09Z5-yXive+hc0EkE3tvWB4Dpglm-n3Y+Z1T5AIvk7GwN93ar1IXnQGm9n6MNfgg6hk8oEwI-vAsBAQIDQNWIuT4NJVZ8OxpvQAMgxrkAPfKgBfgMAFYMgA7BkAOYMgBABhDtoKggAkhkAOvKgBFBkABtyljADRDIAUf1ACBkcowAQgx2I3GdS+19XZ3x7nQzOw0BaVUDrTYO-ATFEAjjgbuoFD7xzCefM6gj3BIJ-lnH66siCYKLiXaEZcIAV2wFXWY0A67Z0bs3Vu3CSAdxScQ-xyD+7Z38JNbOWCqFzSEVAfBFA54LyIZwx+lDuk5C-k0wuW1HiYDPoRbxbDfFDOzrwyZ9xpkCIkd08Z6TCHL3asws6ID6ndJEZgOgYj6mnNoK1JCUZUIJC1DDUwKEMD+AABRvmwvJYi-lsIAEpcAR0sJgOwQQjgQDdjSMOxZnkAQgOVd5ny0jfJefCpm-zAXTBBWCjIbtjBFR8Y4aFhp8BCVeVAD5IF5JqV+WkAFOAgXYvBZCqMxKcikrogiilSLqVkrRY5Bi9LGWguZfiiwhKonFkSAZNylKvmEVsjKwVmLgUitxVCqV+l7IYURVShVWr+UVTpSqpluKxVWAWUS4s2giB+X8G7VmtCmkFQJn5BiYc5XIqgKzIVWK1UQppPMl2t9WYR1DL0NlHgbV+XZpgVm5gQVintY6+JMVXVcRTO6z1-gfUmv9SyrAQb2EOrDpG9wNq0q1GTU69JLriCVrViBD1PLvW+tVTigNUYi2+NDZaWQZaoDaAbbG+Nibq2prralZA6VG3YWbXq3NDK-UdoLQ7Vhwb3ahoHTarlDqa190nUTOd2bW15pXYG9dxbQ0UWJQMKYOl8IKDkBkcEqBkBflmhPfAUZ5L3MSMWAAJKwa4aQ5AzWzMmj1pg5CyCfaYA27zgBDBzc+OAoHwN-Ffe+hAvrF0R1ZrbAcrNUPoZ1HALDH7eDszBcAN2D7IJPpfW+j9vFC7AbQ2Bsjhcw6Li8GhiYRAFC3VfKBejihn0QAowgRcz6QAy0HYQDD-wgjfDIwARRTGwCAaQ3kAonnxuY37MivjFFUATCgAB0RnMAWdhTCN5uCPAQQIo53epZUD+DY9p4AAABYYzRIC2dBYXYsORIhhb+YaAzEwOUwltVGXgchTMbHApZ6zVm+UOc6a5fwqCXjpbyAhULTn8K5ZLKjTzsWMBED80MALyggtBE7uEYs4RIs5Gi+BA18XjNJbM6lqzUYLPSowFlj+OXAqLAIENwrLXDRtb0B1v4hmhyqnaoxPrKXBMWaAyRzj2YPlpDk6YClSHfWuc8MtmLCW8CbYmEhwbWBbOooc8pMr7nPMYFqLV+rEBGvNYWx-KEwB8CYH+NZ85cDIsDFk-J0gimyPYmzhprA76dN6ai1d6bvXkvmcezZ6NGaIBjb3hNvL-gACMRXOkD0my8DG5W2Q032nNiLmP+PY8wAAJkS7jgb6XCdhRJzkMnRpKfU93rT5iH3JhhJa+4eb7WPCdesyqB463ef9e2wL9NYUR0JpNsLyeouptU9Z3vKXjOsQM5Psz6A5v3CA+V1j1Xa3GE89u3z7XQ3Bdtn14mo3Ivgrk6gGb4rwsWldKETLjGnSci2+aT9MrU2GcrTckHeBDvJ7hah4t53HPrMba92ln3BMG2B48KLj0nnHjsAgM18PAILZlYTxn1r0PaBAA)

## 使用例（更新系）

### Insert

単一のテーブルに対してInsertできる。リレーションの登録はできない。

```ts
import { Liorm } from "@liorm/client"
import mysql2 from "mysql2"

const db = new Liorm(mysql2)

// insert into task (name, status) values (?, ?);
const task = await db.task.create({
  data: { name: "ormを作る", status: "created" },
});

// insert into task (name, status) values (?, ?), (?, ?);
const tasks = await db.task.createMany({
  data: [
    { name: "ormの設計をする", status: "inprogress" },
    { name: "ormを作る", status: "created" },
  ]
});
```

### Update

単一のテーブルに対するUpdateができる。

```ts
// update task set name = ? where id = ?;
const task = await db.task.update({
  where: { id: 1 }, // ここって主キーかユニークキーだけだっけ
  data: { name: "liormの設計をする" },
});

// updateとupdateManyの引数は同じでよさそう
const tasks = await db.task.updateMany({})
```

### Delete

単一のテーブルに対するDeleteができる。

```ts
// delete from task where id = ?;
const deletedTask = await db.task.delete({
  where: { id: 1 },
});
```

## 使用例（参照系）

### Select

単一のテーブルに対して取得できる。また、リレーションを同時に取得したり、リレーションで検索できる。

```ts
// Select(One) リレーションでの検索、リレーションの取得も最低限実装したい。リレーションでのソートはとりあえず置いておく
const task = await db.task.findFirst({
  where: { id: 1 },
  include: { user: true },
});

// Select(Many)
const tasks = await db.task.findMany({
  where: {
    status: "created",
    user: { name: { contains: "tekihei2317" } },
  },
  include: { user: true },
  orderBy: { id: "desc" },
});
```

### Raw Query

SQLをファイルに書き、そこから型を生成する。

```sql
/* @name SelectTasksOfUsers */
select * from tasks where userId = $userId;
```

```ts
// generated
type SelectUsersTasksResult = {
  name: string,
  userId: number,
}

// generated
type SelectUsersTasksParams = {
  userId: number,
};

const selectUsersTasks = new PreparedQuery();
```

```ts
import { Liorm } from "@liorm/client"
import mysql2 from "mysql2"
import { selectUsersTasks } from "./task-query.ts"

const db = new Liorm(mysql2)
// tasks: SelectUsersTasksResult
const tasks = await selectUsersTasks.run({ userId: 1 }, mysql2);
```

## 難しそうなところ

- データベースの型をもとに、クライアントのクエリの実行に必要な型を取得するところ。特にリレーションの部分。外部キー制約が使えないDBMSもあるので（例: PlanetScale）、そこをサポートするのか。
- sqlファイルをもとに、適切な型を生成すること。データベースのパースの部分ができていれば、あとはなんとかなるような気もする。
