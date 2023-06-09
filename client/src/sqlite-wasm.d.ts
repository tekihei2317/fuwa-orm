declare module "@sqlite.org/sqlite-wasm" {
  declare type DatabaseApi = {
    exec(opts: any): any;
    changes: () => number;
  };
}
