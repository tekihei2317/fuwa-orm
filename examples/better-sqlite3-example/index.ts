import Database from "better-sqlite3";
import { FuwaClient } from "@fuwa-orm/client";
import { ModelGateways } from "./.fuwa-orm/client.js";

const db = new Database("sample.db");
const client = FuwaClient.create<ModelGateways>(db);

const user = client.user.create();

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
