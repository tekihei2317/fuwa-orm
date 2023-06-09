// ------------------------- Common -------------------------

type BatchPayload = {
  count: number;
};

type SelectAndInclude = {
  select: unknown;
  include: unknown;
};

// ------------------------- Model: Task -------------------------

export type Task = {
  id: number;
  name: string;
  done: number;
};

export type TaskCreateInput = {
  id?: number;
  name: string;
  done: number;
};

export type TaskUpdateInput = {
  id?: number;
  name?: string;
  done?: number;
};

export type TaskWhereInput = {
  id?: number;
  name?: string;
  done?: number;
};

export type TaskWhereUniqueInput = {
  id?: number;
};

export type TaskSelect = {
  id?: true;
  name?: true;
  done?: true;
};

export type TaskInclude = {};

export type TaskFetchArgs = {
  include?: TaskInclude;
  select?: TaskSelect;
};

type TaskCreateArgs = { data: TaskCreateInput };
type TaskCreateManyArgs = { data: TaskCreateInput[] };
type TaskUpdateArgs = { where: TaskWhereUniqueInput; data: TaskUpdateInput };
type TaskUpdateManyArgs = { where?: TaskWhereInput; data: TaskUpdateInput };
type TaskDeleteArgs = { where: TaskWhereUniqueInput };
type TaskDeleteManyArgs = { where?: TaskWhereInput };
type TaskFindUniqueArgs = { where: TaskWhereUniqueInput } & TaskFetchArgs;
type TaskFindFirstArgs = { where?: TaskWhereInput } & TaskFetchArgs;
type TaskFindManyArgs = { where?: TaskWhereInput } & TaskFetchArgs;

// ------------------------- Gateways -------------------------

export type TaskGateway = {
  create: (args: TaskCreateArgs) => Promise<Task>;
  createMany: (args: TaskCreateManyArgs) => Promise<BatchPayload>;
  update: (args: TaskUpdateArgs) => Promise<Task>;
  updateMany: (args: TaskUpdateManyArgs) => Promise<BatchPayload>;
  delete: (args: TaskDeleteArgs) => Promise<Task>;
  deleteMany: (args?: TaskDeleteManyArgs) => Promise<BatchPayload>;
  findUnique: <Args extends TaskFindUniqueArgs>(args: Args) => Promise<Task | null>;
  findUniqueOrThrow: <Args extends TaskFindUniqueArgs>(args: Args) => Promise<Task>;
  findFirst: <Args extends TaskFindFirstArgs>(args?: Args) => Promise<Task | null>;
  findFirstOrThrow: <Args extends TaskFindFirstArgs>(args?: Args) => Promise<Task>;
  findMany: <Args extends TaskFindManyArgs>(args?: Args) => Promise<Task[]>;
};

export type ModelGateways = {
  task: TaskGateway;
};
