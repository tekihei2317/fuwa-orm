import { Database } from "better-sqlite3";
import { QueryRunner, createBetterSQLite3QueryRunner } from "./query-runner.js";

type ModelAction =
  | "create"
  | "createMany"
  | "update"
  | "updateMany"
  | "delete"
  | "deleteMany"
  | "findUnique"
  | "findUniqueOrThrow"
  | "findFirst"
  | "findFirstOrThrow"
  | "findMany";

type GenerateQueryInput = {
  model: string;
  action: ModelAction;
  args: unknown;
};

type GeneratedQuery = {
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

function createInsertStatement(model: string, args: CreateActionArgs): string {
  const columns = Object.keys(args.data).map((column) => `"${column}"`);
  const values = [...new Array(columns.length)].fill("?");
  return `INSERT INTO ${model} (${columns.join(", ")}) VALUES (${values.join(", ")}) RETURNING *`;
}

function createInsertManyStatement(model: string, args: CreateManyActionArgs): string {
  const createInput = args.data[0];
  if (createInput === undefined) throw new Error("TODO: Create many input is an empty array.");

  const columns = Object.keys(createInput).map((column) => `"${column}"`);
  const value = [...new Array(columns.length)].fill("?").join(", ");
  const values = [...new Array(args.data.length)].fill(`(${value})`).join(", ");

  return `INSERT INTO ${model} (${columns.join(", ")}) VALUES ${values}`;
}

function createUpdateStatement(model: string, args: UpdateActionArgs): string {
  const assignments = Object.keys(args.data).map((column) => `"${column}" = ?`);
  const filters = Object.keys(args.where).map((column) => `"${column}" = ?`);

  return `UPDATE ${model} SET ${assignments.join(",")} WHERE ${filters.join(" AND ")} RETURNING *`;
}

function createUpdateManyStatement(model: string, args: UpdateManyActionArgs): string {
  const assignments = Object.keys(args.data).map((column) => `"${column}" = ?`);
  const filters = args.where === undefined ? undefined : Object.keys(args.where).map((column) => `"${column}" = ?`);
  const whereClause = filters === undefined ? undefined : `WHERE ${filters.join(" AND ")}`;

  return `UPDATE ${model} SET ${assignments.join(",")}` + (whereClause === undefined ? "" : ` ${whereClause}`);
}

/**
 * Generate query to execute from user's arguments.
 */
function generateQuery({ action, model, args }: GenerateQueryInput): GeneratedQuery {
  if (action === "create") {
    const validatedArgs = validateCreateActionArgs(args);

    // It is better to create a statement and parameters in one function
    return {
      action,
      statement: createInsertStatement(model, validatedArgs),
      parameters: Object.values(validatedArgs.data),
    };
  } else if (action === "createMany") {
    const validatedArgs = validateCreateManyActionArgs(args);
    const parameters = validatedArgs.data.flatMap((createInput) => Object.values(createInput));

    return {
      action,
      statement: createInsertManyStatement(model, validatedArgs),
      parameters,
    };
  } else if (action === "update") {
    const validatedArgs = validateUpdateActionArgs(args);

    return {
      action,
      statement: createUpdateStatement(model, validatedArgs),
      parameters: [...Object.values(validatedArgs.data), ...Object.values(validatedArgs.where)],
    };
  } else if (action === "updateMany") {
    const validatedArgs = validateUpdateManyActionArgs(args);

    return {
      action,
      statement: createUpdateManyStatement(model, validatedArgs),
      parameters: [
        ...Object.values(validatedArgs.data),
        ...(validatedArgs.where ? Object.values(validatedArgs.where) : []),
      ],
    };
  } else {
    throw new Error(`Action '${action}' is unsupported for query engine now.`);
  }
}

type AnyAction = (args: any) => any;

/**
 * Create model action, which takes user's arguments and run generated query.
 */
function createModelAction({
  queryRunner,
  model,
  action,
}: {
  queryRunner: QueryRunner;
  model: string;
  action: ModelAction;
}): AnyAction {
  return async (args) => {
    const generatedQuery = generateQuery({ model, action, args });

    if (generatedQuery.action === "create") {
      return queryRunner.create(generatedQuery);
    } else if (generatedQuery.action === "createMany") {
      return queryRunner.createMany(generatedQuery);
    } else if (generatedQuery.action === "update") {
      return queryRunner.update(generatedQuery);
    } else if (generatedQuery.action === "updateMany") {
      return queryRunner.updateMany(generatedQuery);
    } else {
      throw new Error(`Action '${generatedQuery.action}' is unsupported for model action now.`);
    }
  };
}

type ModelGateway = {
  [action in ModelAction]: AnyAction;
};

function createModelGateways<ModelGateways>(queryRunner: QueryRunner): ModelGateways {
  const modelGateways = new Proxy(
    {},
    {
      get(_target, prop) {
        const model = prop.toString();

        return {
          create: createModelAction({ queryRunner, model, action: "create" }),
          createMany: createModelAction({ queryRunner, model, action: "createMany" }),
          update: createModelAction({ queryRunner, model, action: "update" }),
          updateMany: createModelAction({ queryRunner, model, action: "updateMany" }),
          delete: createModelAction({ queryRunner, model, action: "delete" }),
          deleteMany: createModelAction({ queryRunner, model, action: "deleteMany" }),
          findUnique: createModelAction({ queryRunner, model, action: "findUnique" }),
          findUniqueOrThrow: createModelAction({ queryRunner, model, action: "findUniqueOrThrow" }),
          findFirst: createModelAction({ queryRunner, model, action: "findFirst" }),
          findFirstOrThrow: createModelAction({ queryRunner, model, action: "findFirstOrThrow" }),
          findMany: createModelAction({ queryRunner, model, action: "findMany" }),
        } satisfies ModelGateway;
      },
    }
  ) as ModelGateways;

  return modelGateways;
}

export function createFuwaClient<ModelGateways>(driver: Database): ModelGateways {
  const queryRunner = createBetterSQLite3QueryRunner(driver);

  return createModelGateways(queryRunner);
}

export const FuwaClient = {
  create: createFuwaClient,
};
