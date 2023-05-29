import fs from "node:fs/promises";
import { parseTableDefinition } from "./parser/parser.js";

/**
 * Generate database client types from create table statements.
 */
export function generate(statements: string): string {
  const tableDefinitions = parseTableDefinition(statements);
  console.log(tableDefinitions);

  // TODO: 型を生成する
  return "";
}

async function main() {
  const schema = `CREATE TABLE User (
  id INTEGER NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  PRIMARY KEY (id),
  UNIQUE (email)
);
CREATE TABLE Post (
  id INTEGER NOT NULL,
  authorId INTEGER NOT NULL,
  title TEXT NOT NULL,
  published integer NOT NULL DEFAULT 0, -- Boolean
  PRIMARY KEY (id),
  FOREIGN KEY (authorId) REFERENCES User (id)
);`;

  generate(schema);
}

main();
