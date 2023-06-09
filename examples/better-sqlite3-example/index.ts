import Database from "better-sqlite3";
import { FuwaClient } from "@fuwa-orm/client/better-sqlite3";
import { ModelGateways } from "./fuwa-orm/types.js";

const db = new Database("sample.db");
const client = FuwaClient.create<ModelGateways>(db);

db.prepare("drop table if exists User").run();
db.prepare(
  `create table User (
  id INTEGER NOT NULL PRIMARY KEY,
  email TEXT NOT NULL
) strict;`
).run();

async function main() {
  const user = await client.user.create({
    data: {
      id: 1,
      email: "hoge@example.com",
    },
  });
  console.log(user, user.id, user.email);

  const users = await client.user.createMany({
    data: [{ email: "hoge@example.com" }, { email: "fuga@example.com" }],
  });
  console.log(users);

  const updatedUser = await client.user.update({
    where: { id: 1 },
    data: { email: "hoge@example.com" },
  });
  console.log(updatedUser);

  const updateResult = await client.user.updateMany({
    where: { email: "fuga@example.com" },
    data: { email: "hoge@example.com" },
  });
  console.log(updateResult);

  const deletedUser = await client.user.delete({
    where: { id: user.id },
  });
  console.log(deletedUser);

  const deleteResult = await client.user.deleteMany({
    where: { email: "hoge@example.com" },
  });
  console.log(deleteResult);
}

main();

// const users = client.user.findMany();

// const user1 = client.user.findFirst();
// const user2 = client.user.findUnique({
//   where: { id: 1 },
// });
// const user3 = client.user.delete({
//   where: { id: 1 },
// });
// const user4 = client.user.deleteMany();
// const user5 = client.user.update({
//   where: { id: 1 },
//   data: { email: "test@example.com" },
// });
// const user6 = client.user.updateMany({
//   data: { name: "test" },
// });

// console.log(user, users);
// console.log(user1, user2, user3, user4, user5, user6);

// const post = client.post.findMany();
// console.log(user, post);

// const db = new Database("sample.db");
// db.exec("DROP TABLE IF EXISTS User");
// db.exec("CREATE TABLE User (id INTEGER NOT NULL PRIMARY KEY, name TEXT NOT NULL)");

// const userNames = ["alice", "bob"];
// userNames.forEach((userName) => {
//   const result = db.prepare("INSERT INTO User (name) values (?)").run(userName);
//   console.log(result);
// });

// const users = db.prepare("select * from User").all();
// console.log(users);

// const alice = db.prepare("select * from User where name = ?").get("alice");
// console.log(alice);
