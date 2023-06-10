import { describe, expect, test } from "vitest";
import { parseTableDefinition } from "./parser";
import { TableDefinition } from "../core";

describe("parseTableDefinition", () => {
  test("parse create table statement", () => {
    const tableDefinitions = parseTableDefinition(`create table User (
  id INTEGER NOT NULL PRIMARY KEY,
  name TEXT NOT NULL
)`);
    const expected: TableDefinition[] = [
      {
        name: "User",
        columns: [
          {
            name: "id",
            nullable: false,
            optional: true,
            type: "INTEGER",
          },
          {
            name: "name",
            nullable: false,
            optional: false,
            type: "TEXT",
          },
        ],
        constraints: [{ type: "PRIMARY", columns: [0] }],
      },
    ];

    expect(tableDefinitions).toStrictEqual(expected);
  });
});
