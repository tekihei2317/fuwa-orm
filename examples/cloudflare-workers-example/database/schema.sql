CREATE TABLE User (
  id INTEGER NOT NULL PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  UNIQUE (email)
);
