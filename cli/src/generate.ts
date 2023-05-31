import { parseTableDefinition } from "./parser/parser.js";

/**
 * Generate database client types from create table statements.
 */
export function generate(statements: string): string {
  const tableDefinitions = parseTableDefinition(statements);
  console.log(JSON.stringify(tableDefinitions, null, 2));

  // TODO: 型を生成する
  return "";
}
