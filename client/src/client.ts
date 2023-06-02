import { Database } from "better-sqlite3";
import { ModelAction } from "./core.js";
import { QueryRunner, createBetterSQLite3QueryRunner } from "./query-runner.js";
import { generateQuery } from "./generate-query.js";

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
