import { Database } from "better-sqlite3";

type QueryRunnerInput = {
  statement: string;
  parameters: unknown[];
};

type BatchPayload = {
  count: number;
};

type SomeModel = Record<string, unknown>;

/**
 * Engineが生成したクエリを実行する
 */
export type QueryRunner = {
  create(input: QueryRunnerInput): SomeModel;
  createMany(input: QueryRunnerInput): BatchPayload;
  update: (input: QueryRunnerInput) => SomeModel;
  updateMany: (input: QueryRunnerInput) => BatchPayload;
  delete: (input: QueryRunnerInput) => SomeModel;
  deleteMany: (input: QueryRunnerInput) => BatchPayload;
  // findUnique: (input: unknown) => unknown;
  // findUniqueOrThrow: (input: unknown) => unknown;
  // findFirst: (input: unknown) => unknown;
  // findFirstOrThrow: (input: unknown) => unknown;
  // findMany: (input: unknown) => unknown;
};

export class ModelNotFoundError extends Error {}

function isSomeModel(model: unknown): model is SomeModel {
  return typeof model === "object" && model !== null;
}

export function createBetterSQLite3QueryRunner(driver: Database): QueryRunner {
  const queryRunner: QueryRunner = {
    create(input) {
      const result = driver.prepare(input.statement).get(input.parameters);
      if (isSomeModel(result)) {
        return result;
      } else {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
    },
    createMany(input) {
      const result = driver.prepare(input.statement).run(input.parameters);
      return { count: result.changes };
    },
    update(input) {
      const result = driver.prepare(input.statement).get(input.parameters);
      if (!isSomeModel(result)) {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
      return result;
    },
    updateMany(input) {
      const result = driver.prepare(input.statement).run(input.parameters);
      return { count: result.changes };
    },
    delete(input) {
      const result = driver.prepare(input.statement).get(input.parameters);
      if (!isSomeModel(result)) {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
      return result;
    },
    deleteMany(input) {
      const result = driver.prepare(input.statement).run(input.parameters);
      return { count: result.changes };
    },
  };

  return queryRunner;
}
