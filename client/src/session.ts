import { Database } from "better-sqlite3";

export type SQLiteSession = {
  execute: (args: unknown) => any;
};

// TODO: createBetterSQLiteSessionに変更する
export function createSQLiteSession(client: Database): SQLiteSession {
  const execute = (args: unknown) => {
    console.log(args);
    return client.prepare("select 1 as value").get();
  };

  return {
    execute,
  };
}
