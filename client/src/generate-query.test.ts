import { describe, expect, test } from "vitest";
import { generateQuery, QueryWithAction } from "./generate-query.js";

describe("generateQuery", () => {
  test("generate query for create action", () => {
    const query = generateQuery({
      action: "create",
      model: "User",
      args: {
        data: { name: "test", email: "test@example.com" },
      },
    });
    const expected: QueryWithAction = {
      action: "create",
      statement: 'INSERT INTO User ("name", "email") VALUES (?, ?) RETURNING *',
      parameters: ["test", "test@example.com"],
    };

    expect(query.statement).toBe(expected.statement);
    expect(query.parameters).toStrictEqual(expected.parameters);
  });

  test("generate query for createMany action", () => {
    const query = generateQuery({
      action: "createMany",
      model: "User",
      args: {
        data: [
          { name: "test1", email: "test1@example.com" },
          { name: "test2", email: "test2@example.com" },
        ],
      },
    });
    const expected: QueryWithAction = {
      action: "createMany",
      statement: 'INSERT INTO User ("name", "email") VALUES (?, ?), (?, ?)',
      parameters: ["test1", "test1@example.com", "test2", "test2@example.com"],
    };

    expect(query.statement).toBe(expected.statement);
    expect(query.parameters).toStrictEqual(expected.parameters);
  });

  test("generate query for update action", () => {
    const query = generateQuery({
      action: "update",
      model: "User",
      args: {
        data: { name: "test", email: "test@example.com" },
        where: { id: 1 },
      },
    });

    expect(query.statement).toBe('UPDATE User SET "name" = ?,"email" = ? WHERE "id" = ? RETURNING *');
    expect(query.parameters).toStrictEqual(["test", "test@example.com", 1]);
  });

  test("generate query for updateMany action", () => {
    const query = generateQuery({
      action: "updateMany",
      model: "User",
      args: {
        data: { name: "updatedName", email: "updated@example.com" },
        where: { name: "test" },
      },
    });

    expect(query.statement).toBe('UPDATE User SET "name" = ?,"email" = ? WHERE "name" = ?');
    expect(query.parameters).toStrictEqual(["updatedName", "updated@example.com", "test"]);
  });

  test("generate query for delete action", () => {
    const query = generateQuery({
      action: "delete",
      model: "User",
      args: {
        where: { id: 1 },
      },
    });

    expect(query.statement).toBe('DELETE FROM User WHERE "id" = ? RETURNING *');
    expect(query.parameters).toStrictEqual([1]);
  });

  test("generate query for updateMany action", () => {
    const query = generateQuery({
      action: "deleteMany",
      model: "User",
      args: {
        where: { name: "test" },
      },
    });

    expect(query.statement).toBe('DELETE FROM User WHERE "name" = ?');
    expect(query.parameters).toStrictEqual(["test"]);
  });
});
