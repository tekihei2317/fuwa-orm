import { assertNonNullable } from "./assertion.js";
import { ColumnDefinition, TableDefinition } from "./core.js";
import { parseTableDefinition } from "./parser/parser.js";

function createSectionHeader(sectionName: string): string {
  return `// ------------------------- ${sectionName} -------------------------`;
}

function createCommonSection(): string {
  return [
    createSectionHeader("Common"),
    `type BatchPayload = {
  count: number;
};

type SelectAndInclude = {
  select: unknown;
  include: unknown;
};`,
  ].join("\n\n");
}

/**
 * Get the type that the mode field can take
 */
function toModelFieldType(column: ColumnDefinition): string {
  const applyNullable = (type: string) => (column.nullable ? `${type} | null` : type);

  switch (column.type) {
    case "INT":
      return applyNullable("number");
    case "INTEGER":
      return applyNullable("number");
    case "REAL":
      return applyNullable("number");
    case "TEXT":
      return applyNullable("string");
    case "BLOB":
      // TODO: Consider return type of a BLOB type column
      return applyNullable("string");
    case "ANY":
      return "any";
    default:
      column.type satisfies never;
      throw new Error();
  }
}

function indent(size: number) {
  return (str: string) => " ".repeat(size) + str;
}

const indent2 = indent(2);

function createModelType(tableDef: TableDefinition): string {
  const fieldTypes = tableDef.columns.map((columnDef) => `${columnDef.name}: ${toModelFieldType(columnDef)};`);
  return `export type ${tableDef.name} = {
${fieldTypes.map(indent2).join("\n")}
};`;
}

function createModelCreateInput(tableDef: TableDefinition): string {
  const fields = tableDef.columns.map(
    (column) => `${column.name}${column.optional || column.nullable ? "?" : ""}: ${toModelFieldType(column)};`
  );
  return `export type ${tableDef.name}CreateInput = {
${fields.map(indent2).join("\n")}
};`;
}

function createModelUpdateInput(table: TableDefinition): string {
  const fields = table.columns.map((column) => `${column.name}?: ${toModelFieldType(column)};`);
  return `export type ${table.name}UpdateInput = {
${fields.map(indent2).join("\n")}
};`;
}

function createModelWhereInput(table: TableDefinition): string {
  const fields = table.columns.map((column) => `${column.name}?: ${toModelFieldType(column)};`);
  return `export type ${table.name}WhereInput = {
${fields.map(indent2).join("\n")}
};`;
}

function createModelWhereUniqueInput(table: TableDefinition): string {
  // TODO: Composite unique key
  const fields = table.constraints
    .filter((constraint) => constraint.columns.length === 1)
    .map((constraint) => {
      const columnIndex = constraint.columns[0];
      assertNonNullable(columnIndex);
      const column = table.columns[columnIndex];
      assertNonNullable(column);

      return `${column.name}?: ${toModelFieldType(column)};`;
    });

  return `export type ${table.name}WhereUniqueInput = {
${fields.map(indent2).join("\n")}
};`;
}

function createModelSelectInput(table: TableDefinition): string {
  // TODO: Add relation to field
  const fields = table.columns.map((column) => indent2(`${column.name}?: true;`));
  return `export type ${table.name}Select = {
${fields.join("\n")}
};`;
}

function createModelIncludeInput(table: TableDefinition): string {
  // TODO: Add relation to field
  return `export type ${table.name}Include = {};`;
}

function createFetchArgs(table: TableDefinition): string {
  return `export type ${table.name}FetchArgs = {
  include?: ${table.name}Include;
  select?: ${table.name}Select;
};`;
}

function createModelActions(table: TableDefinition): string {
  return `type ${table.name}CreateArgs = { data: ${table.name}CreateInput };
type ${table.name}CreateManyArgs = { data: ${table.name}CreateInput[] };
type ${table.name}UpdateArgs = { where: ${table.name}WhereUniqueInput; data: ${table.name}UpdateInput };
type ${table.name}UpdateManyArgs = { where?: ${table.name}WhereInput; data: ${table.name}UpdateInput };
type ${table.name}DeleteArgs = { where: ${table.name}WhereUniqueInput };
type ${table.name}DeleteManyArgs = { where?: ${table.name}WhereInput };
type ${table.name}FindUniqueArgs = { where: ${table.name}WhereUniqueInput } & ${table.name}FetchArgs;
type ${table.name}FindFirstArgs = { where?: ${table.name}WhereInput } & ${table.name}FetchArgs;
type ${table.name}FindManyArgs = { where?: ${table.name}WhereInput } & ${table.name}FetchArgs;`;
}

/**
 * Create a model type section.
 */
function createModelSection(table: TableDefinition): string {
  return [
    createSectionHeader(`Model: ${table.name}`),
    createModelType(table),
    createModelCreateInput(table),
    createModelUpdateInput(table),
    createModelWhereInput(table),
    createModelWhereUniqueInput(table),
    createModelSelectInput(table),
    createModelIncludeInput(table),
    createFetchArgs(table),
    createModelActions(table),
  ].join("\n\n");
}

function createGatewayType(tableDef: TableDefinition): string {
  // TODO: Infer return type from arguments.
  return `export type ${tableDef.name}Gateway = {
  create: (args: ${tableDef.name}CreateArgs) => Promise<${tableDef.name}>;
  createMany: (args: ${tableDef.name}CreateManyArgs) => Promise<BatchPayload>;
  update: (args: ${tableDef.name}UpdateArgs) => Promise<${tableDef.name}>;
  updateMany: (args: ${tableDef.name}UpdateManyArgs) => Promise<BatchPayload>;
  delete: (args: ${tableDef.name}DeleteArgs) => Promise<${tableDef.name}>;
  deleteMany: (args?: ${tableDef.name}DeleteManyArgs) => Promise<BatchPayload>;
  findUnique: <Args extends ${tableDef.name}FindUniqueArgs>(args: Args) => Promise<${tableDef.name} | null>;
  findUniqueOrThrow: <Args extends ${tableDef.name}FindUniqueArgs>(args: Args) => Promise<${tableDef.name}>;
  findFirst: <Args extends ${tableDef.name}FindFirstArgs>(args?: Args) => Promise<${tableDef.name} | null>;
  findFirstOrThrow: <Args extends ${tableDef.name}FindFirstArgs>(args?: Args) => Promise<${tableDef.name}>;
  findMany: <Args extends ${tableDef.name}FindManyArgs>(args?: Args) => Promise<${tableDef.name}[]>;
};`;
}

function uncapitalize(str: string): string {
  const firstLetter = str[0];
  return firstLetter === undefined ? str : firstLetter.toLowerCase() + str.slice(1);
}

function createModelGateways(tables: TableDefinition[]): string {
  return `export type ModelGateways = {
${tables.map((table) => indent2(`${uncapitalize(table.name)}: ${table.name}Gateway;`)).join("\n")}
};`;
}

function createGatewaysSection(tableDefs: TableDefinition[]): string {
  return [
    createSectionHeader("Gateways"),
    ...tableDefs.map((tableDef) => createGatewayType(tableDef)),
    createModelGateways(tableDefs),
  ].join("\n\n");
}

/**
 * Generate database client types from create table statements.
 */
export function generate(statements: string): string {
  const tableDefinitions = parseTableDefinition(statements);

  return [
    createCommonSection(),
    ...tableDefinitions.map((tableDef) => createModelSection(tableDef)),
    createGatewaysSection(tableDefinitions),
  ].join("\n\n");
}
