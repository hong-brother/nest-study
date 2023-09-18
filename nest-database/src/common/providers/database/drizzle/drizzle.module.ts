import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { Database } from '../../../../constants/database';
import { drizzle } from 'drizzle-orm/mysql2';
import { ConfigService } from '@nestjs/config';
import mysql from 'mysql2';
import { DefaultLogger, Logger, LogWriter } from 'drizzle-orm/logger';
import * as schema from './entity';
import { MySql2Database } from 'drizzle-orm/mysql2/driver';
import { migrate } from 'drizzle-orm/mysql2/migrator';
class MyLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    console.log({ query, params });
  }
}
@Module({
  providers: [
    {
      provide: Database.DRIZZLE,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        // const connectionString = config.get<string>('DATABASE_URL');
        const connection = mysql.createConnection({
          host: 'localhost',
          port: 3307,
          user: 'test',
          password: 'test',
          database: 'test',
        });

        const dz = drizzle(connection, { logger: new MyLogger(), schema, mode: 'default' });
        // await migrate(dz, { migrationsFolder: './database/drizzle' });
        return dz;
      },
    },
  ],
  exports: [Database.DRIZZLE],
})
export class DrizzleModule implements OnModuleInit {
  constructor(
    @Inject(Database.DRIZZLE)
    private readonly drizzleConnection: MySql2Database,
  ) {}

  onModuleInit(): any {
    console.log('~~');
  }
}
