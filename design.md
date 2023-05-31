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

[生成される型（一部）](https://www.typescriptlang.org/play?ssl=194&ssc=1&pln=196&pc=1#code/PTAEFpK6dBhA9gWyQgdhGWoCgAuAngA4CmoAkmngGICWANniQE6gC8oArmgCYkBmtNCR4BufMTIBlPMyEBzOoxbsuvAUJHjCpUDLlp5AOU716AQwBG9EkqasO3PoOFicE3QCFzeAMYALAAVzAnoEcx5VAG8cUDjQXwRuPAAuUDROJEsWcQBfdx1pEhtfPABBXkpfek4+aNj4gGdiklK07gBrNAQAdzQAGga4oWrakna0Lt6BnHycEExsLFAAWQQ+ejSAVWbWJewcEgAPIgRmPFBC0B2VDhj40FoeNIyslkGHkiRzBjTG2QUH3iaHMSHGoH+BnkoAAPulTPRBnMrjdmHBmCQfCRKEROBc7kNHjwAPwvTLZZhAuJfH6bCEAwxU9Kgkik+lQ2HwsxIjxkVFbIg8LE4vH1T7fBhsyGAwkgsFShnQuEZbmzAqSa67ADq-hYJC1tDw-iSeAASsUfLR0CL8aB7vEnmzKDQGPZOa8KYSaZK0voFHYVHDpYZZSy2X7DCYzFYbAHWEHFe6EWqUdrdRitmhaABHTj6w3GvHmix4K1oG1ih0kslvSleiX0Nke94pjWonV6zM5vMVjjt9MkLu5-NGk3Fy3WtC4vDaNtpvW9zUsDsYg2josW0uT6fiXlL5hSFqlSvDauXZh5ply1lpWSX+u0tl3khM07-RpPi9kOGBBD-Oi8Cs5hoAQZTMPIjR5HuqJVDUdQEg8b54B+t5fpyv7-kIPBASBYEQVBqYsNQJB+P4eGNCeEJHngbKooeJR4EyIxwTe+6wWMPLQbs6KYkw5HRKAQp4OY2zcRiwpTqK+SEWi4lMDhoHgRRdyCT4In7jxEnTgA2gAuqA0lziwApCSQ-EqT0A6icuA5Dj2kmMapwnWcwJlaVJXHGYKWIKeZdqgJZeouSu2IOf0Tnqfy3lMDaekGZ5zAACItHxSkCYFGLBbZWbDhWhm6KiyU2PJwGKRB6VWfuIV5QlAE8HZZlpRZlX9p2OX2dOBmgAAZPuxGkeRs4FbsdV0Mw-x+VEAUtfOGJ5T1fUkQEg21VhvlNf5GXgq1c0OV1vWov1y1KbuCz7MsawbGkGEXOdMCHCcZwXFcN2Vk8NaenEpZ4DYfyKg0uLWLQjS6s8oCWAgCA2MBDTmHixrMOQYPNswap7jd1V7QhVZOlQcZJrWhLfTY4aKvjCZQmjL1-ng9GtLa9qnp+94PMTrHPkycOjswzPfotA1KTy1P-Ox8F2vlZA3UdZEbYzVEMWyN106UTFoKMfCKzTosvlTGpS2tpWTdNeqa-8mOdbkC1S0tMv4e4Z13VAoDBKE4Q8BRju4DJADiJEu2EEQADz8ccTC8BRh02-xcLPpyTgaK4AB8qiEiHRxh+7555qAxL7qAKSp2lockOHejURUPDaznoAAOSBNDzSgCQBYqAEkONwABs0DEd6AZygB3zFjB3Nf54X5XF6XU3d-TLnKxclvEoSDxyw8DzaYEjwYB0JAEAg-CgOR2k1zPpQ17pukF2v19r5vk+ZzXSGNKPuc3b7eD+27wdKcfp94Ofx8n7n2TlfG+YC77pxLpnHee8D6omrqiDe+lQFgOvsIAAbjkZe8RLYoMPkXSBU8t7q22rsKui9sFxFXjfDeW9QAwP3vgiCx8h58HPpfShqCIEZwoo-Gmz9q5vz9iEAOPBv7MJrqwkgAC+HvmAWPVBN8MFYLAbg2UJBMGo1OmAOi1FAH8PPoAGQZACA7oAU1dAD3yoAX4DABWDIAOwZADmDIAQAZ44uBEIAJIZADryoARQZAAbcl4wA0QyAFH9QAgZGGMAEIM-j0Y03fp-IOaceHOxptLaOWc+YuM0DwZObBx4UXvhRWOr8aYKPiPEqBFF54VyrrnOuDcyDNyNK3Y0f4yBd2or3fug81YsRHsUuIpSiF-2ujTeeXUl5gOodfWhQh6G70YUfE+1F2F4MUXEbhZTa5cwRi-fcMSRFf3mX-GRmyzjyOWSstZpcGEH1eoU-4SDekrLiMo5g4hVEPOeTgbRixHagG9liHoIRGjhTgPQWgJdbqe3AAAAoeqcc4lwjLMD+UwAFBBKK+DkuCAAFOYJSLlNKpQggASnYMnQIzBkDAxIIHVEicmQYt4iQBSaQcV4o0pi9axLSXOwpUgKlgdvCkViZkpknBorYtxRBFyblCWNBJWwMlvL+W0tFeK5loBWVSv3DKplhslLysVZS5oAqfABGFXSwkGwSISrZYVFKjUuUKp5Ua6lKrLX2vVZqxoLkirWs5XK7l5KXUmqFXsiIFqHguHqu1cE4jcmEMzodLCDVyKJy9WkciBrnV8uNaiXZrs4lKWTsqBEEb4hRoagAeWYAAFX8BSnoaQ41NwTRHEayaY2pvTUwgNTqg05tdbsfNoi42JzLXEKNY1-hNv6Ym9tvAp3lCLd2zNgalW5qHcIgtYjU1JjMOO0ALhF3VrrQ2mdBCElJoXbQcaS6IJpsld6ntWb+3Ks3R-MNO6i0Hqjeq5teS+oG1wsux9Gb9VruDXmrdI7U16QtXMY4cLnoakSmpSw5hmggrBVQSinBdguWRSQVFTIAAkshgKNHMKUMsTaa1pt8OYMw6HfAdBZXgI4aQa3MAo1RrcaAsPgqzTWoTnFENPQRboLjPHqPoAEzhjgla+V4EDqh4S6HMOgvBeFGu5G0CUZk2gGuicvmQvAKAAAokcUERAbAe0he4RIemLg8EsNES2GHQCqasBhkgcmZzuAwwQNWh7uAGdAEgPEE40AAEU8xyBII0LFJK5aOf+FwXYqhzAAsNIJSwAA6PDLA8sMqxFiiZEU0jlfFLSNIOmEt4AAALHGsyQYryAa5MgePkLrRLCSpYuGK0y9UMscCyz8Zz+XCvMAK+KsrnCtqVaJO0XYeWngGU6-EIS6kprejpDXQbWIeBNas0gGzrXEhIFHrkJkuResPH64Je1w3bigDGzllzBWVtWqYHNsBC3-LvXS0Vtb13CS3fcPd9AaWptriCPwzL2WJt5bI9xvTvGyw4saEF3wGr2NZvKw9qbCPxuXCOJ9orJWftTS24t3btWmD-GO9ZmwbXLsGXB2AjEeBODMAwFN15ODetzEC8F-goW+Py3prFlgYLEvJb61DgbI3XuI9y+T6bFaY2-Zvv9qagOACM63OGDIB2DDmTcGyoWzqDnrCunNA+YAAJmJ+9ybK3NfdhINrh4uulugENzbteJuduW9SetuIYO7vxEJ9qAsN1lIq5Jx9qbeWPfDhPfW3o3u16+4N0bsBweLc1dSeFJ+VuyCB7iBz6PiuHew-j870bqvk-u47Z7jPDbs8+8qnrsGAeNtxGD5w6rvwS-D-iGX-yhfAfm7ZuXrqle17dcFxDmv9upsJ7e0jlPk6b3-C7-EX315avGnkNI-PN8pGLcn7HRf4P8hAA)

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
