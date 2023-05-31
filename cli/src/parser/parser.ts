import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import SQLiteLexer from "./SQLiteLexer.js";
import SQLiteParser, { Column_defContext, Create_table_stmtContext, Table_constraintContext } from "./SQLiteParser.js";
import SQLiteParserListener from "./SQLiteParserListener.js";
import { ColumnDefinition, ColumnType, ConstraintDefinition, TableDefinition, columnTypes } from "../core.js";
import { assertNonNullable } from "../assertion.js";

let tableDefinitions: TableDefinition[] = [];

/**
 * Convert type text into SQLite's column type
 */
function toColumnType(type: string): ColumnType {
  // The conversion is based on SQLite's STRICT Tables(https://www.sqlite.org/stricttables.html),
  // becaulse if the table is not a STRICT Table, the specification of the column type
  // hardly limits the values that can be stored.
  const types: readonly string[] = columnTypes;
  if (types.includes(type.toUpperCase())) {
    return type.toUpperCase() as ColumnType;
  }
  return "ANY";
}

function createColumnDefinitionFromNode(ctx: Column_defContext): ColumnDefinition {
  return {
    name: ctx.column_name().getText(),
    type: toColumnType(ctx.type_name().getText()),
    nullable: !ctx
      .column_constraint_list()
      .some((constraintCtx) => constraintCtx.getText().toUpperCase().startsWith("NOTNULL")),
    // Temporary value, consider autoincrement later
    optional: ctx
      .column_constraint_list()
      .some((constraintCtx) => constraintCtx.getText().toUpperCase().startsWith("DEFAULT")),
  };
}

function createColumnConstraintsFromNode(ctx: Column_defContext): ConstraintDefinition[] {
  const constraints: ConstraintDefinition[] = [];
  ctx.column_constraint_list().forEach((constraintCtx, index) => {
    if (constraintCtx.getText().toUpperCase().startsWith("PRIMARYKEY")) {
      constraints.push({ type: "PRIMARY", columns: [index] });
    } else if (constraintCtx.getText().toUpperCase().startsWith("UNIQUE")) {
      constraints.push({ type: "UNIQUE", columns: [index] });
    }
  });

  return constraints;
}

function convertColumnNamesToIdxs(names: string[], nameToIdx: Map<string, number>): number[] {
  return names.map((name) => {
    const index = nameToIdx.get(name);

    if (index === undefined) {
      throw new Error(`The '${name}' column in the table constraints does not exist in create table statements.`);
    }

    return index;
  });
}

function createTableConstraintsFromNode(
  ctx: Table_constraintContext[],
  columnNameToIdxMap: Map<string, number>
): ConstraintDefinition[] {
  const constraints: ConstraintDefinition[] = [];
  ctx.forEach((constraintCtx) => {
    const constraintText = constraintCtx.getText().toUpperCase();
    const columnNames = constraintCtx.indexed_column_list().map((columnCtx) => columnCtx.getText());
    if (constraintText.startsWith("PRIMARYKEY")) {
      constraints.push({
        type: "PRIMARY",
        columns: convertColumnNamesToIdxs(columnNames, columnNameToIdxMap),
      });
    } else if (constraintText.startsWith("UNIQUE")) {
      constraints.push({
        type: "UNIQUE",
        columns: convertColumnNamesToIdxs(columnNames, columnNameToIdxMap),
      });
    }
  });

  return constraints;
}

/**
 * Make autoincrement column optional(NOTE: This function is destructive).
 */
function makeAutoincrementColumnOptional(
  columns: ColumnDefinition[],
  constraints: ConstraintDefinition[]
): ColumnDefinition[] {
  // If the column is INTEGER and PRIMARY KEY, make it optional because it is autoincrement.
  for (const constraint of constraints) {
    if (constraint.type !== "PRIMARY") continue;
    if (constraint.columns.length > 1) continue;

    const columnIndex = constraint.columns[0];
    assertNonNullable(columnIndex);
    const column = columns[columnIndex];
    assertNonNullable(column);

    if (column.type === "INTEGER") {
      column.optional = true;
    }
  }

  return columns;
}

function createTableDefinitionFromNode(ctx: Create_table_stmtContext): TableDefinition {
  const columns: ColumnDefinition[] = ctx.column_def_list().map((ctx) => createColumnDefinitionFromNode(ctx));
  const columnConstraints: ConstraintDefinition[] = ctx
    .column_def_list()
    .flatMap((ctx) => createColumnConstraintsFromNode(ctx));

  const columnNameToIdxMap = new Map(columns.map((column, index) => [column.name, index]));
  const tableConstraints: ConstraintDefinition[] = createTableConstraintsFromNode(
    ctx.table_constraint_list(),
    columnNameToIdxMap
  );

  const constraints = [...columnConstraints, ...tableConstraints];
  const fixedColumns = makeAutoincrementColumnOptional(columns, constraints);

  return {
    name: ctx.table_name().getText(),
    columns: fixedColumns,
    constraints,
  };
}

class TreeListener extends SQLiteParserListener {
  enterCreate_table_stmt = (ctx: Create_table_stmtContext) => {
    tableDefinitions.push(createTableDefinitionFromNode(ctx));
  };
}

/**
 * Parse create table statements into table definitions.
 */
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
