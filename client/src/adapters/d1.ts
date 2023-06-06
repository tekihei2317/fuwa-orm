import { D1Database } from "@cloudflare/workers-types";
import { createD1QueryRunner } from "../query-runner.js";
import { createModelGateways } from "../client.js";

function createFuwaClient<ModelGateways>(driver: D1Database): ModelGateways {
  const queryRunner = createD1QueryRunner(driver);

  return createModelGateways(queryRunner);
}

export const FuwaClient = {
  create: createFuwaClient,
};
