import { Database } from "better-sqlite3";

export type Session = {
  execute: (args: unknown) => any;
};

// TODO: createBetterSQLiteSessionに変更する
export function createSQLiteSession(client: Database): Session {
  const execute = (args: unknown) => {
    return client.prepare("select 1 as value").get();
  };

  return {
    execute,
  };
}
