// --------------- Common ---------------
type IntFilter = undefined;
type StringFilter = undefined;
type StringNullableFilter = undefined;

type BatchPayload = {
  count: number;
};

type SelectAndInclude = {
  select: unknown;
  include: unknown;
};

// --------------- Model: User ---------------
export type User = {
  id: number;
  email: string;
  name: string | null;
};

type UserCreateInput = {
  id?: number;
  email: string;
  name?: string | null;
};
type UserUpdateInput = {
  email?: string;
  name?: string | null;
};

type UserWhereWithoutRelationInput = {
  id?: IntFilter | number;
  email?: StringFilter | string;
  name?: StringNullableFilter | string | null;
};
type UserWhereUniqueWithoutRelationInput = {
  id?: number;
  email?: number;
};
type UserWhereUniqueInput = UserWhereUniqueWithoutRelationInput;
type UserWhereInput = UserWhereWithoutRelationInput;

type UserSelect = {
  id?: true;
  name?: true;
  email?: true;
  posts?: true | PostFindManyArgs;
};
type UserInclude = {
  posts?: true | PostFindManyArgs;
};
type UserFetchArgs = {
  select?: UserSelect;
  include?: UserInclude;
};

type UserCreateArgs = { data: UserCreateInput };
type UserCreateManyArgs = { data: UserCreateInput[] };
type UserUpdateArgs = { where: UserWhereUniqueInput; data: UserUpdateInput };
type UserUpdateManyArgs = { where: UserWhereInput; data: UserUpdateInput[] };
type UserDeleteArgs = { where: UserWhereUniqueInput };
type UserDeleteManyArgs = { where: UserWhereInput };
type UserFindUniqueArgs = { where: UserWhereUniqueInput } & UserFetchArgs;
type UserFindFirstArgs = { where: UserWhereInput } & UserFetchArgs;
type UserFindManyArgs = { where: UserWhereInput } & UserFetchArgs;

// --------------- Model: Post ---------------
export type Post = {
  id: number;
  title: string;
  published: boolean;
  authorId: number;
};

type PostWhereInput = {
  id?: IntFilter | number;
  title?: StringFilter | string;
};

type PostSelect = {
  id?: true;
  title?: true;
  author?: true | UserFetchArgs;
};
type PostInclude = {};
type PostFetchArgs = {
  select?: PostSelect;
  include?: PostInclude;
};

type PostFindManyArgs = { where?: PostWhereInput } & PostFetchArgs;

// --------------- Payloads ---------------
type UserGetPayload<Args extends UserFetchArgs | true | undefined> = Args extends true
  ? User
  : Args extends SelectAndInclude
  ? "Please either choose `select` or `include`"
  : Args extends { select: UserSelect }
  ? {
      [P in keyof Args["select"]]: P extends "posts"
        ? PostGetPayload<Args["select"]["posts"]>
        : P extends keyof User
        ? User[P]
        : never;
    }
  : Args extends { include: UserInclude }
  ? {
      [P in keyof Args["include"]]: P extends "posts" ? PostGetPayload<Args["include"]["posts"]> : never;
    }
  : never;

// UserSelect['posts']が省略可能なので、undefinedを受け付ける必要がある
type PostGetPayload<Args extends PostFetchArgs | true | undefined> = Args extends true
  ? Post
  : Args extends SelectAndInclude
  ? "Please either choose `select` or `include`"
  : Args extends { select: PostSelect }
  ? {
      [P in keyof Args["select"]]: P extends "author"
        ? UserGetPayload<Args["select"]["author"]>
        : P extends keyof Post
        ? Post[P]
        : never;
    }
  : never;

// --------------- Gateways, Client ---------------
export type UserGateway = {
  create: (args: UserCreateArgs) => Promise<User>;
  createMany: (args: UserCreateManyArgs) => Promise<BatchPayload>;
  update: (args: UserUpdateArgs) => Promise<User>;
  updateMany: (args: UserUpdateManyArgs) => Promise<BatchPayload>;
  delete: (args: UserDeleteArgs) => Promise<User>;
  deleteMany: (args: UserDeleteManyArgs) => Promise<BatchPayload>;
  findUnique: <Args extends UserFindUniqueArgs>(args: Args) => Promise<UserGetPayload<Args> | null>;
  findUniqueOrThrow: <Args extends UserFindUniqueArgs>(args: Args) => Promise<UserGetPayload<Args>>;
  findFirst: <Args extends UserFindFirstArgs>(args: Args) => Promise<UserGetPayload<Args> | null>;
  finFirstOrThrow: <Args extends UserFindFirstArgs>(args: Args) => Promise<UserGetPayload<Args>>;
  findMany: <Args extends UserFindManyArgs>(args: Args) => Promise<UserGetPayload<Args>[]>;
};

export type ModelGateways = {
  user: UserGateway;
};

// export type TransactionClient = Omit<DatabaseClient, "transaction">;
