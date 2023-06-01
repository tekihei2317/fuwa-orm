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

/**
 * Generate query to execute from user's arguments.
 */
function generateQuery(args: GenerateQueryInput): GeneratedQuery {
  if (args.action === "create") {
    // バリデーションを実行する
    // dataが存在すること、カラム: 値の形式になっていることなど

    return {
      action: args.action,
      statement: "insert into User (email) values (?) returning *",
      parameters: ["tekihei2317@example.com"],
    };
  } else {
    throw new Error(`Action '${args.action} is unsupported for query engine now.'`);
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
    console.log({ model, action, args });
    const generaetdQuery = generateQuery({ model, action, args });

    if (generaetdQuery.action === "create") {
      return queryRunner.create({
        statement: "insert into User (email) values (?) returning *",
        parameters: ["tekihei2317@example.com"],
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
