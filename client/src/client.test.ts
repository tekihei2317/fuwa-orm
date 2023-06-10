import { beforeEach, describe, expect, test, vi } from "vitest";
import { FuwaClient } from "./client.js";
import Database from "better-sqlite3";
import { ModelGateways } from "./fixtures/fuwa-orm-simple.js";
import { QueryRunner } from "./query-runner.js";

const mockQueryRunner: QueryRunner = {
  create: async () => ({}),
  createMany: async () => ({ count: 0 }),
  update: async () => ({}),
  updateMany: async () => ({ count: 0 }),
  delete: async () => ({}),
  deleteMany: async () => ({ count: 0 }),
};

vi.mock("./query-runner.js", async (importOriginal) => {
  const original = await importOriginal<object>();

  return {
    ...original,
    createBetterSQLite3QueryRunner: () => mockQueryRunner,
  };
});

describe("FuwaClient", () => {
  describe("model gateway", () => {
    let db: ModelGateways;

    beforeEach(() => {
      const database = new Database("test.sqlite3");
      db = FuwaClient.create<ModelGateways>(database);
    });

    test("has mutation actions", () => {
      expect(typeof db.task.create).toBe("function");
      expect(typeof db.task.createMany).toBe("function");
      expect(typeof db.task.update).toBe("function");
      expect(typeof db.task.updateMany).toBe("function");
      expect(typeof db.task.delete).toBe("function");
      expect(typeof db.task.deleteMany).toBe("function");
    });

    test("has query actions", () => {
      expect(typeof db.task.findUnique).toBe("function");
      expect(typeof db.task.findUniqueOrThrow).toBe("function");
      expect(typeof db.task.findFirst).toBe("function");
      expect(typeof db.task.findFirstOrThrow).toBe("function");
      expect(typeof db.task.findMany).toBe("function");
    });
  });

  describe("model actions execution", () => {
    const db = FuwaClient.create<ModelGateways>(new Database("test.sqlite3"));

    test("execute create action", async () => {
      const task = await db.task.create({
        data: { name: "test", done: 0 },
      });
      expect(task).toStrictEqual({});
    });

    test("execute createMany action", async () => {
      const result = await db.task.createMany({
        data: [{ name: "test", done: 0 }],
      });
      expect(result).toStrictEqual({ count: 0 });
    });

    test("execute update action", async () => {
      const task = await db.task.update({
        where: { id: 1 },
        data: { name: "updated" },
      });
      expect(task).toStrictEqual({});
    });

    test("execute updateMany action", async () => {
      const result = await db.task.updateMany({
        where: { name: "test" },
        data: { name: "updated" },
      });
      expect(result).toStrictEqual({ count: 0 });
    });

    test("execute delete action", async () => {
      const task = await db.task.delete({
        where: { id: 1 },
      });
      expect(task).toStrictEqual({});
    });

    test("execute createMany action", async () => {
      const result = await db.task.deleteMany({
        where: { name: "test" },
      });
      expect(result).toStrictEqual({ count: 0 });
    });
  });
});
