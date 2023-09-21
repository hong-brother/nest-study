import { Client } from 'pg';
import { databaseType } from '../../../constants/database-type';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';

export const drizzlePgProvider = {
  provide: databaseType.drizzlePG,
  useFactory: async (config: ConfigService) => {
    const client = new Client({
      host: 'localhost',
      port: 65432,
      database: 'postgres',
      user: 'postgres',
      password: 'changeme',
    });
    return drizzle(client);
  },
  inject: [ConfigService],
};
