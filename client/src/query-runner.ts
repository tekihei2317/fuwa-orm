import { D1Database } from "@cloudflare/workers-types";
import { DatabaseApi } from "@sqlite.org/sqlite-wasm";
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
 * Query runner executes query generated by the engine
 */
export type QueryRunner = {
  create(input: QueryRunnerInput): Promise<SomeModel>;
  createMany(input: QueryRunnerInput): Promise<BatchPayload>;
  update(input: QueryRunnerInput): Promise<SomeModel>;
  updateMany(input: QueryRunnerInput): Promise<BatchPayload>;
  delete(input: QueryRunnerInput): Promise<SomeModel>;
  deleteMany(input: QueryRunnerInput): Promise<BatchPayload>;
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

/**
 * Create query runner for better-sqlite3
 */
export function createBetterSQLite3QueryRunner(driver: Database): QueryRunner {
  const queryRunner: QueryRunner = {
    async create(input) {
      const result = driver.prepare(input.statement).get(input.parameters);
      if (isSomeModel(result)) {
        return result;
      } else {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
    },
    async createMany(input) {
      const result = driver.prepare(input.statement).run(input.parameters);
      return { count: result.changes };
    },
    async update(input) {
      const result = driver.prepare(input.statement).get(input.parameters);
      if (!isSomeModel(result)) {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
      return result;
    },
    async updateMany(input) {
      const result = driver.prepare(input.statement).run(input.parameters);
      return { count: result.changes };
    },
    async delete(input) {
      const result = driver.prepare(input.statement).get(input.parameters);
      if (!isSomeModel(result)) {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
      return result;
    },
    async deleteMany(input) {
      const result = driver.prepare(input.statement).run(input.parameters);
      return { count: result.changes };
    },
  };

  return queryRunner;
}

/**
 * Create query runner for D1 Client (https://developers.cloudflare.com/d1/platform/client-api)
 */
export function createD1QueryRunner(driver: D1Database): QueryRunner {
  const queryRunner: QueryRunner = {
    async create(input) {
      const result = await driver
        .prepare(input.statement)
        .bind(...input.parameters)
        .first<SomeModel | null>();
      if (!isSomeModel(result)) {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
      return result;
    },
    async createMany(input) {
      const { meta } = await driver
        .prepare(input.statement)
        .bind(...input.parameters)
        .run();
      return { count: meta.changes };
    },
    async update(input) {
      const result = await driver
        .prepare(input.statement)
        .bind(...input.parameters)
        .first<SomeModel | null>();
      if (!isSomeModel(result)) {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
      return result;
    },
    async updateMany(input) {
      const { meta } = await driver
        .prepare(input.statement)
        .bind(...input.parameters)
        .run();
      return { count: meta.changes };
    },
    async delete(input) {
      const result = await driver
        .prepare(input.statement)
        .bind(...input.parameters)
        .first<SomeModel | null>();
      if (!isSomeModel(result)) {
        throw new ModelNotFoundError(`No result were returned for query "${input.statement}."`);
      }
      return result;
    },
    async deleteMany(input) {
      const { meta } = await driver
        .prepare(input.statement)
        .bind(...input.parameters)
        .run();
      return { count: meta.changes };
    },
  };

  return queryRunner;
}

export function createSQLiteWasmQueryRunner(driver: DatabaseApi): QueryRunner {
  const queryRunner: QueryRunner = {
    async create(input) {
      return {};
    },
    async createMany(input) {
      return { count: 0 };
    },
    async update(input) {
      return {};
    },
    async updateMany(input) {
      return { count: 0 };
    },
    async delete(input) {
      return {};
    },
    async deleteMany(input) {
      return { count: 0 };
    },
  };

  return queryRunner;
}
