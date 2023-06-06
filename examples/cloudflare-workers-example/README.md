# cloudflare-workers-example

```bash
# create database
wrangler d1 execute fuwa-orm --local --file='./database/schema.sql'

# generate types for fuwa-orm
yarn fuwa generate database/schema.sql database/fuwa-orm.ts
```
