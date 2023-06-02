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
  id?: number;
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

// ------------------------- Model: Post -------------------------

export type Post = {
  id: number;
  authorId: number;
  title: string;
  published: number;
};

export type PostCreateInput = {
  id?: number;
  authorId: number;
  title: string;
  published?: number;
};

export type PostUpdateInput = {
  id?: number;
  authorId?: number;
  title?: string;
  published?: number;
};

export type PostWhereInput = {
  id?: number;
  authorId?: number;
  title?: string;
  published?: number;
};

export type PostWhereUniqueInput = {
  id?: number;
};

export type PostSelect = {
  id?: true;
  authorId?: true;
  title?: true;
  published?: true;
};

export type PostInclude = {};

export type PostFetchArgs = {
  include?: PostInclude;
  select?: PostSelect;
};

type PostCreateArgs = { data: PostCreateInput };
type PostCreateManyArgs = { data: PostCreateInput[] };
type PostUpdateArgs = { where: PostWhereUniqueInput; data: PostUpdateInput };
type PostUpdateManyArgs = { where?: PostWhereInput; data: PostUpdateInput };
type PostDeleteArgs = { where: PostWhereUniqueInput };
type PostDeleteManyArgs = { where?: PostWhereInput };
type PostFindUniqueArgs = { where: PostWhereUniqueInput } & PostFetchArgs;
type PostFindFirstArgs = { where?: PostWhereInput } & PostFetchArgs;
type PostFindManyArgs = { where?: PostWhereInput } & PostFetchArgs;

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

export type PostGateway = {
  create: (args: PostCreateArgs) => Promise<Post>;
  createMany: (args: PostCreateManyArgs) => Promise<BatchPayload>;
  update: (args: PostUpdateArgs) => Promise<Post>;
  updateMany: (args: PostUpdateManyArgs) => Promise<BatchPayload>;
  delete: (args: PostDeleteArgs) => Promise<Post>;
  deleteMany: (args?: PostDeleteManyArgs) => Promise<BatchPayload>;
  findUnique: <Args extends PostFindUniqueArgs>(args: Args) => Promise<Post | null>;
  findUniqueOrThrow: <Args extends PostFindUniqueArgs>(args: Args) => Promise<Post>;
  findFirst: <Args extends PostFindFirstArgs>(args?: Args) => Promise<Post | null>;
  finFirstOrThrow: <Args extends PostFindFirstArgs>(args?: Args) => Promise<Post>;
  findMany: <Args extends PostFindManyArgs>(args?: Args) => Promise<Post[]>;
};

export type ModelGateways = {
  user: UserGateway;
  post: PostGateway;
};
