export const columnTypes = ["INT", "INTEGER", "TEXT", "REAL", "BLOB", "ANY"] as const;
export type ColumnType = (typeof columnTypes)[number];

export type ColumnDefinition = {
  name: string;
  type: ColumnType;
  nullable: boolean;
  optional: boolean; // Column has default value or INTEGER & PRIMARY KEY（means autoincrement in SQLite）
};

export type ConstraintType = "PRIMARY" | "UNIQUE";

export type ConstraintDefinition = {
  type: ConstraintType;
  columns: number[]; // Column definition indexes
};

export type RelationDefinition = {
  fromTable: string;
  fromColumns: string[];
  toTable: string;
  toColumns: string[];
};

export type TableDefinition = {
  name: string;
  columns: ColumnDefinition[];
  constraints: ConstraintDefinition[];
  // relations: RelationDefinition[];
};
