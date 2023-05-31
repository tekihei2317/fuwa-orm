import { Database } from "better-sqlite3";
import { createSQLiteSession, SQLiteSession } from "./session.js";

type ModelAction =
  | "create"
  | "createMany"
  | "update"
  | "updateMany"
  | "delete"
  | "deleteMany"
  | "findUnique"
  | "findUniqueOrThrow"
  | "findFirst"
  | "findFirstOrThrow"
  | "findMany";

type AnyAction = (args: any) => any;

type ModelGateway = {
  [action in ModelAction]: AnyAction;
};

function createModelAction({
  session,
  model,
  action,
}: {
  session: SQLiteSession;
  model: string;
  action: ModelAction;
}): AnyAction {
  return (args) => session.execute({ model, action, args });
}

function createModelGateways<ModelGateways>(session: SQLiteSession): ModelGateways {
  const modelGateways = new Proxy(
    {},
    {
      get(_target, prop) {
        const model = prop.toString();

        return {
          create: createModelAction({ session, model, action: "create" }),
          createMany: createModelAction({ session, model, action: "createMany" }),
          update: createModelAction({ session, model, action: "update" }),
          updateMany: createModelAction({ session, model, action: "updateMany" }),
          delete: createModelAction({ session, model, action: "delete" }),
          deleteMany: createModelAction({ session, model, action: "deleteMany" }),
          findUnique: createModelAction({ session, model, action: "findUnique" }),
          findUniqueOrThrow: createModelAction({ session, model, action: "findUniqueOrThrow" }),
          findFirst: createModelAction({ session, model, action: "findFirst" }),
          findFirstOrThrow: createModelAction({ session, model, action: "findFirstOrThrow" }),
          findMany: createModelAction({ session, model, action: "findMany" }),
        } satisfies ModelGateway;
      },
    }
  ) as ModelGateways;

  return modelGateways;
}

export function createFuwaClient<ModelGateways>(dbClient: Database): ModelGateways {
  const session = createSQLiteSession(dbClient);

  return createModelGateways(session);
}

export const FuwaClient = {
  create: createFuwaClient,
};
