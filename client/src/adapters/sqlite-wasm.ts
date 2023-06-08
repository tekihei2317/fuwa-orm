import { DatabaseApi } from "@sqlite.org/sqlite-wasm";
import { createSQLiteWasmQueryRunner } from "../query-runner.js";
import { createModelGateways } from "../client.js";

function createFuwaClient<ModelGateways>(driver: DatabaseApi): ModelGateways {
  const queryRunner = createSQLiteWasmQueryRunner(driver);

  return createModelGateways(queryRunner);
}

export const FuwaClient = {
  create: createFuwaClient,
};
