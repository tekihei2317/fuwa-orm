import sqlite3InitModule, { type DatabaseApi } from "@sqlite.org/sqlite-wasm";
import { FuwaClient } from "@fuwa-orm/client/sqlite-wasm";
import { ModelGateways } from "./database/fuwa-orm";

let db: DatabaseApi;

const sqlite3 = await sqlite3InitModule({
  print: console.log,
  printErr: console.error,
});

if (sqlite3.opfs) {
  // @ts-ignore
  db = new sqlite3.oo1.OpfsDb("/mydb.sqlite3");
} else {
  throw new Error("opfs is not enabled");
}

const dbClient = FuwaClient.create<ModelGateways>(db);

db.exec(
  "create table if not exists Task (id INTEGER NOT NULL PRIMARY KEY, name TEXT NOT NULL, done INTEGER NOT NULL);"
);

function reloadTasks() {
  postMessage(
    db.exec({
      sql: "select * from Task order by id desc",
      returnValue: "resultRows",
      // @ts-ignore
      rowMode: "object",
    })
  );
}

async function createTask(name: string): Promise<void> {
  await dbClient.task.create({
    data: { name, done: 0 },
  });
}

async function toggleTaskStatus(id: number, status: number): Promise<void> {
  await dbClient.task.update({
    data: { done: status },
    where: { id },
  });
}

async function deleteTask(id: number): Promise<void> {
  await dbClient.task.delete({
    where: { id },
  });
}

reloadTasks();

self.addEventListener("message", (e) => {
  console.log(e.data);
  switch (e.data.action) {
    case "create":
      createTask(e.data.name);
      reloadTasks();
      break;
    case "toggle":
      toggleTaskStatus(e.data.id, e.data.status);
      break;
    case "delete":
      deleteTask(e.data.id);
      break;
    default:
      throw new Error(`Unsupported action: ${e.data.action}`);
  }
});

export default {};
