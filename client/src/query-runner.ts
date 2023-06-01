import { Database } from "better-sqlite3";

type QueryRunnerInput = {
  statement: string;
  parameters: unknown[];
};

// Engineが生成したクエリを実行する
export type QueryRunner = {
  // 戻り値はどこまで実行前に保証できるか分からないので、一旦unknownにします
  create: (args: QueryRunnerInput) => unknown;
  createMany: (args: QueryRunnerInput) => unknown;
  // update: (args: unknown) => unknown;
  // updateMany: (args: unknown) => unknown;
  // delete: (args: unknown) => unknown;
  // deleteMany: (args: unknown) => unknown;
  // findUnique: (args: unknown) => unknown;
  // findUniqueOrThrow: (args: unknown) => unknown;
  // findFirst: (args: unknown) => unknown;
  // findFirstOrThrow: (args: unknown) => unknown;
  // findMany: (args: unknown) => unknown;
};

export function createBetterSQLite3QueryRunner(driver: Database): QueryRunner {
  return {
    create: (input) => {
      const result = driver.prepare(input.statement).get(input.parameters);
      return result;
    },
    createMany: (input) => {
      const result = driver.prepare(input.statement).run(input.parameters);
      return { count: result.changes };
    },
  };
}
