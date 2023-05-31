import { Database } from "better-sqlite3";
import { createSQLiteSession } from "./session.js";

// Override by the generated types
export function createFuwaClient<ModelGateways>(client: Database): ModelGateways {
  const session = createSQLiteSession(client);

  return {} as ModelGateways;
}

export const FuwaClient = {
  create: createFuwaClient,
};
