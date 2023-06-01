import { Database } from "better-sqlite3";
import { QueryRunner, createBetterSQLite3QueryRunner } from "./query-runner.js";
import { Result } from "./result.js";

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

type CreateActionArgs = {
  data: Record<string, number | string | null>;
};

function validateCreateActionArgs(args: unknown): Result<CreateActionArgs, string> {
  // TODO: improve validation
  if (typeof args !== "object" || args === null) return Result.error("Create action args must be an object.");
  if (!("data" in args)) return Result.error("Create action args must have data property.");
  if (typeof args.data !== "object" || args.data === null) return Result.error("Create action data must be an object.");

  const data = Object.entries(args.data).map(([column, value]) => {
    if (value !== null && typeof value !== "string" && typeof value !== "number") {
      throw new Error(`Value for column '${column} must be number, string or null.`);
    }

    return [column, value];
  });

  return Result.ok({ data: Object.fromEntries(data) });
}

function createInsertStatementForCreate(model: string, args: CreateActionArgs): string {
  const columns = Object.keys(args.data).map((column) => `"${column}"`);
  const values = [...new Array(columns.length)].fill("?");
  return `INSERT INTO ${model} (${columns.join(", ")}) VALUES (${values.join(", ")}) RETURNING *`;
}

/**
 * Generate query to execute from user's arguments.
 */
function generateQuery({ action, model, args }: GenerateQueryInput): GeneratedQuery {
  if (action === "create") {
    const result = validateCreateActionArgs(args);
    if (!result.success) {
      throw new Error(`Invalid create action args. ${result.error}`);
    }
    const validatedArgs = result.value;

    return {
      action,
      statement: createInsertStatementForCreate(model, validatedArgs),
      parameters: Object.values(validatedArgs.data),
    };
  } else {
    throw new Error(`Action '${action} is unsupported for query engine now.'`);
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
  // TODO: Actionが正しい型を返すことを確認できるようにしたい。現状だとcreateで戻り値を返さなくてもエラーにならない。
  return async (args) => {
    const generaetdQuery = generateQuery({ model, action, args });

    if (generaetdQuery.action === "create") {
      return queryRunner.create({
        statement: generaetdQuery.statement,
        parameters: generaetdQuery.parameters,
      });
    } else {
      throw new Error(`Action '${args.action} is unsupported for model action now.'`);
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
