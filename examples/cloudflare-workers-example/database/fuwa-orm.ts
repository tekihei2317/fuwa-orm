// ------------------------- Common -------------------------

type BatchPayload = {
  count: number;
};

type SelectAndInclude = {
  select: unknown;
  include: unknown;
};

// ------------------------- Model: User -------------------------

export type User = {
  id: number;
  email: string;
  name: string | null;
};

export type UserCreateInput = {
  id?: number;
  email: string;
  name?: string | null;
};

export type UserUpdateInput = {
  id?: number;
  email?: string;
  name?: string | null;
};

export type UserWhereInput = {
  id?: number;
  email?: string;
  name?: string | null;
};

export type UserWhereUniqueInput = {
  email?: string;
};

export type UserSelect = {
  id?: true;
  email?: true;
  name?: true;
};

export type UserInclude = {};

export type UserFetchArgs = {
  include?: UserInclude;
  select?: UserSelect;
};

type UserCreateArgs = { data: UserCreateInput };
type UserCreateManyArgs = { data: UserCreateInput[] };
type UserUpdateArgs = { where: UserWhereUniqueInput; data: UserUpdateInput };
type UserUpdateManyArgs = { where?: UserWhereInput; data: UserUpdateInput };
type UserDeleteArgs = { where: UserWhereUniqueInput };
type UserDeleteManyArgs = { where?: UserWhereInput };
type UserFindUniqueArgs = { where: UserWhereUniqueInput } & UserFetchArgs;
type UserFindFirstArgs = { where?: UserWhereInput } & UserFetchArgs;
type UserFindManyArgs = { where?: UserWhereInput } & UserFetchArgs;

// ------------------------- Gateways -------------------------

export type UserGateway = {
  create: (args: UserCreateArgs) => Promise<User>;
  createMany: (args: UserCreateManyArgs) => Promise<BatchPayload>;
  update: (args: UserUpdateArgs) => Promise<User>;
  updateMany: (args: UserUpdateManyArgs) => Promise<BatchPayload>;
  delete: (args: UserDeleteArgs) => Promise<User>;
  deleteMany: (args?: UserDeleteManyArgs) => Promise<BatchPayload>;
  findUnique: <Args extends UserFindUniqueArgs>(args: Args) => Promise<User | null>;
  findUniqueOrThrow: <Args extends UserFindUniqueArgs>(args: Args) => Promise<User>;
  findFirst: <Args extends UserFindFirstArgs>(args?: Args) => Promise<User | null>;
  finFirstOrThrow: <Args extends UserFindFirstArgs>(args?: Args) => Promise<User>;
  findMany: <Args extends UserFindManyArgs>(args?: Args) => Promise<User[]>;
};

export type ModelGateways = {
  user: UserGateway;
};
