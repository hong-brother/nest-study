# nest-database

## drizzle orm
### migration(drizzle-kit)
- generate
  drizzle-kit generate:{dialect} lets you generate migrations based on you DrizzleORM schema.
```
drizzle-kit generate:mysql --config=./src/common/providers/database/drizzle/drizzle-kit.config.ts

```
- Introspect / Pull
  drizzle-kit introspect:{dialect} command lets you pull DDL from existing database and generate schema.ts file in matter of seconds.
```
 drizzle-kit introspect:mysql --config=./src/common/providers/database/drizzle/drizzle-kit.config.ts
```

- push
  drizzle-kit push:{dialect} lets you push your schema changes directly to the database and omit managing SQL migration files. This has proven to be very useful for rapid local development(prototyping) and when working with remote databases like Planetscale(opens in a new tab), Neon(opens in a new tab), Turso(opens in a new tab) and others.
```
drizzle-kit push:mysql --config=./src/common/providers/database/drizzle/drizzle-kit.config.ts
```

- check
```
drizzle-kit check:mysql --config=./src/common/providers/database/drizzle/drizzle-kit.config.ts
```
