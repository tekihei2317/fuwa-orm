import { Database } from "better-sqlite3";
import { createSQLiteSession } from "./session.js";

// Override by the generated types
export interface FuwaClient {}

export function createFuwaClient(client: Database): FuwaClient {
  const session = createSQLiteSession(client);

  return {};
}

export const FuwaClient = {
  create: createFuwaClient,
};
