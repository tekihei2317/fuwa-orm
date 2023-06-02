import { ModelAction } from "./core.js";

type GenerateQueryInput = {
  model: string;
  action: ModelAction;
  args: unknown;
};

type GeneratedQuery = {
  statement: string;
  parameters: unknown[];
};

type QueryWithAction = {
  action: ModelAction;
  statement: string;
  parameters: unknown[];
};

type ModelCreateInput = Record<string, number | string | null>;
type ModelUpdateInput = Record<string, number | string | null>;
// 条件が存在すること（空のレコードではないこと）を型で保証したい
type WhereCondition = Record<string, number | string | null>;

type CreateActionArgs = { data: ModelCreateInput };
type CreateManyActionArgs = { data: ModelCreateInput[] };
type UpdateActionArgs = { data: ModelUpdateInput; where: WhereCondition };
type UpdateManyActionArgs = { data: ModelUpdateInput; where: WhereCondition | undefined };

function isArray(data: unknown): data is unknown[] {
  return Array.isArray(data);
}

function validateModelCreateInput(input: unknown): ModelCreateInput {
  if (typeof input !== "object" || input === null) throw new Error("Invalid model create input.");

  const data = Object.entries(input).map(([column, value]) => {
    if (value !== null && typeof value !== "string" && typeof value !== "number") {
      throw new Error(`Value for column '${column} must be number, string or null.`);
    }

    return [column, value];
  });

  return Object.fromEntries(data);
}

const validateModelUpdateInput = validateModelCreateInput;

function validateWhereCondition(input: unknown): WhereCondition {
  if (typeof input !== "object" || input === null) throw new Error("Invalid model create input.");

  const data = Object.entries(input).map(([column, value]) => {
    if (value !== null && typeof value !== "string" && typeof value !== "number") {
      throw new Error(`Value for column '${column} must be number, string or null.`);
    }

    return [column, value];
  });

  return Object.fromEntries(data);
}

function validateCreateActionArgs(args: unknown): CreateActionArgs {
  // TODO: improve validation
  if (typeof args !== "object" || args === null) throw new Error("Create action args must be an object.");
  if (!("data" in args)) throw new Error("Create action args must have data property.");
  if (typeof args.data !== "object" || args.data === null) throw new Error("Create action data must be an object.");

  const data = Object.entries(args.data).map(([column, value]) => {
    if (value !== null && typeof value !== "string" && typeof value !== "number") {
      throw new Error(`Value for column '${column} must be number, string or null.`);
    }

    return [column, value];
  });

  return { data: Object.fromEntries(data) };
}

function validateCreateManyActionArgs(args: unknown): CreateManyActionArgs {
  if (typeof args !== "object" || args === null) throw new Error("Create many action args must be an object.");
  if (!("data" in args)) throw new Error("Create many action args must have data property.");
  if (!isArray(args.data)) throw new Error("Create many action data must be an array.");

  const data = args.data.map((input) => validateModelCreateInput(input));

  return { data };
}

function validateUpdateActionArgs(args: unknown): UpdateActionArgs {
  if (typeof args !== "object" || args === null) throw new Error("Update action args must be an object.");
  if (!("data" in args)) throw new Error("'data' is required for update action args.");
  if (!("where" in args)) throw new Error("'where' is required for update action args.");

  const data = validateModelUpdateInput(args.data);
  const where = validateWhereCondition(args.where);

  return { data, where };
}

function validateUpdateManyActionArgs(args: unknown): UpdateManyActionArgs {
  if (typeof args !== "object" || args === null) throw new Error("Update action args must be an object.");
  if (!("data" in args)) throw new Error("'data' is required for update action args.");

  const data = validateModelUpdateInput(args.data);
  const where = "where" in args ? validateWhereCondition(args.where) : undefined;

  return { data, where };
}

function createInsertQuery(model: string, args: CreateActionArgs): GeneratedQuery {
  const columns = Object.keys(args.data).map((column) => `"${column}"`);
  const values = [...new Array(columns.length)].fill("?");
  const statement = `INSERT INTO ${model} (${columns.join(", ")}) VALUES (${values.join(", ")}) RETURNING *`;
  const parameters = Object.values(args.data);
  return { statement, parameters };
}

function createInsertManyQuery(model: string, args: CreateManyActionArgs): GeneratedQuery {
  const createInput = args.data[0];
  if (createInput === undefined) throw new Error("TODO: Create many input is an empty array.");

  const columns = Object.keys(createInput).map((column) => `"${column}"`);
  const value = [...new Array(columns.length)].fill("?").join(", ");
  const values = [...new Array(args.data.length)].fill(`(${value})`).join(", ");
  const parameters = args.data.flatMap((createInput) => Object.values(createInput));
  const statement = `INSERT INTO ${model} (${columns.join(", ")}) VALUES ${values}`;

  return { statement, parameters };
}

function createUpdateQuery(model: string, args: UpdateActionArgs): GeneratedQuery {
  const assignments = Object.keys(args.data).map((column) => `"${column}" = ?`);
  const filters = Object.keys(args.where).map((column) => `"${column}" = ?`);
  const statement = `UPDATE ${model} SET ${assignments.join(",")} WHERE ${filters.join(" AND ")} RETURNING *`;
  const parameters = [...Object.values(args.data), ...Object.values(args.where)];

  return { statement, parameters };
}

function createUpdateManyQuery(model: string, args: UpdateManyActionArgs): GeneratedQuery {
  const assignments = Object.keys(args.data).map((column) => `"${column}" = ?`);
  const filters = args.where === undefined ? undefined : Object.keys(args.where).map((column) => `"${column}" = ?`);
  const whereClause = filters === undefined ? undefined : `WHERE ${filters.join(" AND ")}`;
  const parameters = [...Object.values(args.data), ...(args.where ? Object.values(args.where) : [])];
  const statement =
    `UPDATE ${model} SET ${assignments.join(",")}` + (whereClause === undefined ? "" : ` ${whereClause}`);

  return { statement, parameters };
}

/**
 * Generate query to execute from user's arguments.
 */
export function generateQuery({ action, model, args }: GenerateQueryInput): QueryWithAction {
  switch (action) {
    case "create":
      return { action, ...createInsertQuery(model, validateCreateActionArgs(args)) };
    case "createMany":
      return { action, ...createInsertManyQuery(model, validateCreateManyActionArgs(args)) };
    case "update":
      return { action, ...createUpdateQuery(model, validateUpdateActionArgs(args)) };
    case "updateMany":
      return { action, ...createUpdateManyQuery(model, validateUpdateManyActionArgs(args)) };
    default:
      throw new Error(`Action '${action}' is unsupported for query engine now.`);
  }
}
