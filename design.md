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

[生成される型（一部）](https://www.typescriptlang.org/play?#code/C4TwDgpgBAkgdsAYgSwDbAgJygXigVzgBMIAzZOCIgbgChRIoBlYTCgcxXS1wOLIpU6DaCzZx2AOXypUAQwBGqCFwzY8hEuUo1a9cNABCc4AGMAFgAU5IVAHs5RXgG9aUd1FN3CwAFxQ4fABbBSw6AF89AHooqCC7ElR9RgBVAGcePFcPKGQif0CQrAAaNw8IILk0fzTWDlKcuDkgiBq6iSgAHwCZVFLI2ggADzA7TGAoEShLO1qXMryC4NDMMuBkYGU28XYysHwlZDTzKn8FOztlOTgyuXxgczGYfJ6i1YGYuPuTZDs4XLg+2AyWg6SwAGFMBATBB4ED5jk8gB+JZvBrlSrVKC1Hbo9xNFoo7HtdhdHqyfp6KZgzApMBEGFw+4IjFVVBEnH1Mr45oQDkksmBCm0D6xADuJyhIKgNIA6pKILKNo97gAlCDydZ-JkTLLc3JEInwJBoNSC5ZYfUVNlEsQcVQ8bqciT6gl8-x2iTSWSKZQO7BOgXdIVJSLUjKYeVYCApODIACO+EVyu8wHVmt+cB1LPcyNRKzxUGtaCJhQLIulcoVsYTSezeCr0ZrieTD1T6Z+2sB92EBhlEajUPr-awg9bKrTGs7We7wDotE+gEB3QCmrtKZrUx8Psh487AEP7zW99etNu7mCSD4GdhWF7FTFCYZWI5DoRgAIKYdhpHNQBnAOT+DSL6MrOlLhhCD4YAAstcIAfl+P5-gBI6YMBGA6gA2gAupSt4EPSj7gbSBHvp+356jkErRoBA7VnGLY6oWSE0VgdJ-rCoEVkRbEwjBcBwWRiEmMhNI8ehs7YbhnyJBAGBPlgAAiGqyRA8HkVA27uFRUIsZGdG1hxQJgX2NJKco0GwWpP7aa0KGbpxorYsppjAkRKDEM2SZWRRHg2bpY6eYZ9z9FAABkKGILJFhqb2qQRu5RAoJgtTeRp+p+XZCqMSKYURVF5gxfJmAJXxAkIT5WkKv5WUOblNKRWYBVkfOUzriaxClalmlQDZRJtfZRk5eFbUNdFzVUn2bVMM5uppYihr+KwSaFieyhEktECFncbaYOtmBJmS9X5WpxmMG18CmKg+AkC4YaTbMSDHYJFVOcoLl9Q901vcAhYUJd11nudcD-SQuFEV9EAuT+u4bYWbp7ctVqYuyi37Zt+qjLUaQI9A3QjRQRCdeNd1xVgF1XTdL2Y8A2OowdeMPSVlnE9EsQACoAPIcwpBTNBwRWjU15VzR4GTfUSNIQy5v3AxTZ40uTANg32UvAG+xCK5TIvuGLkN+HwADWcB2GKcAyyDtmEEbJtmzeREAOKydYtgOEQAA8VnDBgxDfkdjVWd0G1kpoAg6AAfLw+qe0M3tEN+QdIihUC+FHglexAPvMDN6tEJr0CJwA5JYVwZEWyo8BYFylwABrrLnV1AYxQNXf1y9XBfJ6nCHp5nzivXrumq1A4RQEi+o5N1OQ5BhlgAlABsQCAdikFAakYQXdfAAXWFYSnU-71Ps893HUAF9TaQd4nbWO8Azv2I4Htkevm-b+v5-bxHe8H9-R8xxnJ8LyXivGko8UIzywp3b+39KAADcwjjw8CPL+7ho6x2-H3VuANdJ52HqPBB7hJ4HxnnPQBy9V5PwLpgkg29d74Kgb-NBp936gOvk7Gw993Zr0obLAGr8z4PQvlhT+dDoEQDgZgOg38kGujEZaecnxJYzTfgI7egAZBhXIAe+VAC-AYAKwZAB2DIAcwZACADCHbQVBABJDIAdeVACKDIADblrGAGiGQAo-qAEDI1RgAhBgcWuB6N876u0ft3P+mcRpPQQoHNGwd+BmKIBHHAXdvzH3jhEq+D1IEeFQf-b8qsc44MLsXaEpcIDl2wJXWY0Ba4zQbk3FuPCSDtzSSgtOQST5903v4KaM1cFj2-oQ-exCKDz0XmQrhL8d7IKgTkBhmTT7bUeJgS+KFfHsP8SMmafDZljA-g0iZHgpmZ1ISvNqLCHrgO2TsgIsiJF0OkY0S5tAWomQjFBBIGofz3lfLZAAFHIMiuk0KqTIgASlwBHSwmA7BBCOBAN2NIw6FnebxWC-hvm-JQv8omX5gU4FBeCyFGQ3bGEan4xwcL9T4BIl8n5X5dJiQBZikF0xcVQphRGUlORyXsVKsiqlaQaUUrUlinFELmWEosMSmJTFlIYG5ai0yUq6VpEFYy4V+LYWSvMhALlUAUXUpQmZFSGLFUMrBSq6FoqrDLJJYWbQRBAr+DdmzIszTfbxQJoFNSYcdW8qgGzJVJq8XQppEsl2D82YR2DL0NlHgbWBQ5pgNm5hwVintY6xJEU3X0S8mRT1PL-C+uNUy1VEZg0cIdWHKN7gbVJVqCmp1jD6oE2rWrbNXq81+sLYG4tbCQ3uzDeaWQFaoDaCbXGhNSba1pobcQJtHrW0+vbaallWAS3+LDYOm1WqHV1umVOwmzMvw5tRfm7FyqA1LswCu0NYdsKkoGFMBSwkFByAyOCVAyAM6zW6vgCMulnmJELAAElYNcNIcgXKZhTZ60wchZBPtMAbZFwAhh5swCBsDWo4CvvfQgJVx6I5s2VowNmqG4CgfA38LDH7eAc0hcAN2D7-xPpfW+j9xRT7AdI+hzMBcw7zi8KRiYRAFC3SgM+qADHFDPogJRhA85n0gGBkOwg5H-hBG+BhgAikmNgEA0ifOBd1fjcxv2ZFE2KKogmFAADoTOYCswijAnzem-mEv4ZzORiyoH8AXDAtQAACwxmiQHsxCguhYciRAi4C-URmJgcphLaiMvA5DmY2L+aztmbMUqc3QjKGCXiZbyMPcLHhmIaSLMjbz8WMBEAC0MILygQtBA7uEQs4Ros5Fi7+eViXTMpYs+lmzEYrMyUc85vLBp-CFacK1-U7W9Cdb+MZgcyo2rqX62loTVmgMkbIxh75aQFOmG1UhpVzmuu2eS6liYSGhtYHs5BCATmXP-jcxVtk3nfPADqw1iATWWvze-lCYA+BMD-Fs5IxB0WBjycU6QZTGH+4uS01gd9emDMxaW3FpLeANuWbu3ZmNmanvjaquVxYUAACMxW6FtPJy8WG72sRB1m1FzHAmCARgAExXYG1tzLRODI5f3hNin1PWdTzp33TzdNoCtfcHNjrHgLsrYeGt3nm2MvDcFy2UdiaTbC4PqLl44uSs6xmm9mXkw0ZsfPrLmnbPFsc9s0qNXAiee4+u4NgXGaDJ66TYbkXZP8v+FN7Ti32soFW9hiIjwdvytS8m9b5akwNhbGT3Lh3B9ItQ4W8rrHnOsDra9-z7XjbkDJWAIHqeE23TeceOwCALWzcAgtm9+PLO2vQ9oEAA)

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
