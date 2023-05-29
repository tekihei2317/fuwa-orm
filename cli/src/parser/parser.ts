import { CharStream, CommonTokenStream, FileStream, ParseTreeWalker } from "antlr4";
import SQLiteLexer from "./SQLiteLexer.js";
import SQLiteParser from "./SQLiteParser.js";
import SQLiteParserListener from "./SQLiteParserListener.js";
import { TableDefinition } from "../core.js";

let tableDefinitions: TableDefinition[] = [];

class TreeListener extends SQLiteParserListener {}

export function parseTableDefinition(input: string): TableDefinition[] {
  const chars = new CharStream(input);
  const lexer = new SQLiteLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new SQLiteParser(tokens);

  const tree = parser.parse();
  const listener = new TreeListener();
  tableDefinitions = [];
  ParseTreeWalker.DEFAULT.walk(listener, tree);

  return tableDefinitions;
}
