export type ColumnType = "INTEGER" | "TEXT" | "REAL" | "BLOB" | "ANY";

export type ColumnDefinition = {
  name: string;
  type: ColumnType;
  nullable: boolean;
  default?: unknown;
};

export type ConstraintType = "PRIMARY" | "UNIQUE";

export type TableConstraint = {
  type: ConstraintType;
  columns: string[]; // カラムのインデックス（添字）の方がいいかも→WhereUniqueを設定するときに、カラムを参照するため
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
  constraints: TableConstraint[];
  // relations: RelationDefinition[];
};
