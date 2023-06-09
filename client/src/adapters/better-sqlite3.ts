import { Database } from "better-sqlite3";
import { createBetterSQLite3QueryRunner } from "../query-runner.js";
import { createModelGateways } from "../client.js";

function createFuwaClient<ModelGateways>(driver: Database): ModelGateways {
  const queryRunner = createBetterSQLite3QueryRunner(driver);

  return createModelGateways(queryRunner);
}

export const FuwaClient = {
  create: createFuwaClient,
};
