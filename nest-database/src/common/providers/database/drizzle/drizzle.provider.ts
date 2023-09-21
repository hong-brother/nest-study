import { Client } from 'pg';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { OrmName } from '../../../constants/orm-name';

export const drizzlePgProvider = {
  provide: OrmName.DRIZZLE_ORM,
  useFactory: async (config: ConfigService) => {
    const client = new Client({
      host: config.get<string>('PG_HOST'),
      port: config.get<number>('PG_PORT'),
      database: config.get<string>('PG_DATABASE'),
      user: config.get<string>('PG_USER'),
      password: config.get<string>('PG_PASSWORD'),
    });
    await client.connect();
    return drizzle(client);
  },
  inject: [ConfigService],
};
