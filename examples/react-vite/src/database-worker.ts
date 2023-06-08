import sqlite3InitModule, { type DatabaseApi } from "@sqlite.org/sqlite-wasm";

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

function createTask(name: string): void {
  db.exec({
    sql: "insert into Task (name, done) values (?, ?)",
    bind: [name, 0],
  });
}

function toggleTaskStatus(id: number): void {
  db.exec({
    sql: "update Task set done = case when done = 1 then 0 else 1 end where id = ?",
    bind: [id],
  });
}

function deleteTask(id: number): void {
  db.exec({
    sql: "delete from Task where id = ?",
    bind: [id],
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
      toggleTaskStatus(e.data.id);
      reloadTasks();
      break;
    case "delete":
      deleteTask(e.data.id);
      reloadTasks();
      break;
    default:
      throw new Error(`Unsupported action: ${e.data.action}`);
  }
});

export default {};
