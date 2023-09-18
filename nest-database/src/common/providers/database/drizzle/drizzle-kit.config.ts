import { Config } from 'drizzle-kit';

export default {
  driver: 'mysql2',
  dbCredentials: {
    host: 'localhost',
    port: 3307,
    user: 'test',
    password: 'test',
    database: 'test',
  },
  schema: './src/common/providers/database/drizzle/entity/*.ts',
  out: './migrations/drizzle',
  breakpoints: true,
  verbose: true,
} satisfies Config;
