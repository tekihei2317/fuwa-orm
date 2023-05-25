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

```ts
// liorm/.client/index.d.ts
// TODO:
```

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
