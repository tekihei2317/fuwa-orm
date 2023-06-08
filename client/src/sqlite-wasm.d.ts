// reference: https://github.com/mizchi/sqlite-wasm-playground/blob/d8a70e1a0e5f393ea0148b3cc51751b1fda5314e/src/sqlite3.d.ts

declare module "@sqlite.org/sqlite-wasm" {
  declare type DatabaseApi = {
    filename: string;
    pointer: number;
    exec(input: string, opts?: ExecThisOptions): DatabaseApi;
    exec(input: string, opts?: ExecResultRowsOptions): any;

    exec(opts: ExecThisOptions): DatabaseApi;
    exec(opts: ExecResultRowsOptions): any;

    // exec(opts: ExecOptions & {returnValue: "resultRows"}): any;
    prepare(sql: string): PreparedStatement;

    isOpen: () => boolean;
    affirmOpen: () => DatabaseApi;
    close: () => void;
    changes: (total?: boolean, sixtyFour?: boolean) => number;
    dbFilename: () => string;
    dbName: () => string;
    dbVfsName: (dbName: any) => string;
    createFunction: Function;

    selectValue: Function;
    selectValues: Function;
    selectArray: Function;
    selectObject: Function;
    selectArrays: Function;
    selectObjects: Function;

    openStatementCount: Function;
    transaction: Function;
    savepoint: Function;
    checkRc: Function;
  };
}
