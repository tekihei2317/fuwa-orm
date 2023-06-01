import { Database } from "better-sqlite3";

type QueryRunnerInput = {
  statement: string;
  parameters: unknown[];
};

type BatchPayload = {
  count: number;
};

type SomeModel = Record<string, unknown>;

// Engineが生成したクエリを実行する
export type QueryRunner = {
  // 戻り値はどこまで実行前に保証できるか分からないので、一旦unknownにします
  create(args: QueryRunnerInput): SomeModel;
  createMany(args: QueryRunnerInput): BatchPayload;
  update: (args: QueryRunnerInput) => SomeModel;
  // updateMany: (args: unknown) => unknown;
  // delete: (args: unknown) => unknown;
  // deleteMany: (args: unknown) => unknown;
  // findUnique: (args: unknown) => unknown;
  // findUniqueOrThrow: (args: unknown) => unknown;
  // findFirst: (args: unknown) => unknown;
  // findFirstOrThrow: (args: unknown) => unknown;
  // findMany: (args: unknown) => unknown;
};

export class ModelNotFoundError extends Error {}

function isSomeModel(model: unknown): model is SomeModel {
  return typeof model === "object" && model !== null;
}

export function createBetterSQLite3QueryRunner(driver: Database): QueryRunner {
  const queryRunner: QueryRunner = {
    create: (input) => {
      const result = driver.prepare(input.statement).get(input.parameters);
      if (isSomeModel(result)) {
        return result;
      } else {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
    },
    createMany: (input) => {
      const result = driver.prepare(input.statement).run(input.parameters);
      return { count: result.changes };
    },
    update: (input) => {
      console.log(input);
      const result = driver.prepare(input.statement).get(input.parameters);
      if (isSomeModel(result)) {
        return result;
      } else {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
    },
  };

  return queryRunner;
}
