import fs from "node:fs/promises";
import path from "node:path";
import Database from "better-sqlite3";
import { describe, test, beforeEach, afterEach, beforeAll, expect } from "vitest";
import { FuwaClient } from "./better-sqlite3.js";
import { ModelGateways, Task } from "../fixtures/fuwa-orm-simple.js";

describe("better-sqlite3 client", () => {
  const database = new Database("test.sqlite3");
  const db = FuwaClient.create<ModelGateways>(database);

  beforeAll(async () => {
    // create task table
    database.exec(await fs.readFile(path.join(__dirname, "../fixtures/schema-simple.sql"), { encoding: "utf-8" }));
  });

  beforeEach(() => {
    database.exec("BEGIN");
  });

  afterEach(() => {
    database.exec("ROLLBACK");
  });

  test("can create a record", async () => {
    await db.task.create({
      data: { name: "test", done: 0 },
    });
    expect(database.prepare("select count(*) as count from Task").get()).toStrictEqual({ count: 1 });
  });

  test("can create multiple records", async () => {
    await db.task.createMany({
      data: [
        { name: "task1", done: 0 },
        { name: "task2", done: 1 },
      ],
    });
    expect(database.prepare("select count(*) as count from Task").get()).toStrictEqual({ count: 2 });
  });

  test("can update a record", async () => {
    const task = database.prepare("insert into Task (name, done) values ('test', 1) returning *").get() as Task;
    const updatedTask = await db.task.update({
      where: { id: task.id },
      data: { name: "updated" },
    });

    expect(updatedTask.name).toBe("updated");
  });

  test("can update multiple records", async () => {
    database.prepare("insert into Task (name, done) values ('test', 0), ('test2', 0), ('test3', 1)").run();
    const result = await db.task.updateMany({
      where: { done: 0 },
      data: { done: 1 },
    });

    expect(result).toStrictEqual({ count: 2 });
    expect(database.prepare("select * from Task").all()).toMatchObject([
      { name: "test", done: 1 },
      { name: "test2", done: 1 },
      { name: "test3", done: 1 },
    ]);
  });

  test("can delete a record", async () => {
    const task = database.prepare("insert into Task (name, done) values ('test', 1) returning *").get() as Task;
    await db.task.delete({
      where: { id: task.id },
    });

    expect(database.prepare("select count(*) as count from Task").get()).toStrictEqual({ count: 0 });
  });

  test("can delete multiple records", async () => {
    database.prepare("insert into Task (name, done) values ('test', 0), ('test2', 0), ('test3', 1)").run();
    const result = await db.task.deleteMany({
      where: { done: 0 },
    });

    expect(result).toStrictEqual({ count: 2 });
    expect(database.prepare("select count(*) as count from Task").get()).toStrictEqual({ count: 1 });
  });
});
