# fuwa-orm

Lightweight ORM for SQLite with typesafe client and code generation from SQL [WIP]

## Installation

```bash
yarn add -D @fuwa-orm/cli
yarn add @fuwa-orm/client
```

## Usage

```sql
-- schema.sql
CREATE TABLE User (
  id INTEGER NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  PRIMARY KEY (id),
  UNIQUE (email)
);
CREATE TABLE Post (
  id INTEGER NOT NULL,
  authorId INTEGER NOT NULL,
  title TEXT NOT NULL,
  published integer NOT NULL DEFAULT 0, -- Boolean
  PRIMARY KEY (id),
  FOREIGN KEY (authorId) REFERENCES User (id)
);
```

```bash
yarn fuwa generate schema.sql
```

```ts
import Database from "better-sqlite3";
import { FuwaClient } from "@fuwa-orm/client";
import { ModelGateways } from "./.fuwa-orm/index.js";

const db = FuwaClient.create<ModelGateways>(new Database("sample.db"));

const user = db.user.create();
console.log(user);

const post = db.post.create();
console.log(post);

const users = db.user.findMany();
console.log(users);
```
