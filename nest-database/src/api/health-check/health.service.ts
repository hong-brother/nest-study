import { HealthCheckService as checkService, HttpHealthIndicator, HealthCheckResult } from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { Database } from '../../constants/database';
import { MySql2Client } from 'drizzle-orm/mysql2';
import { QueryBuilder } from 'drizzle-orm/mysql-core';
import { SQL, sql } from 'drizzle-orm';
import { MySql2Database } from 'drizzle-orm/mysql2/driver';
import { isNotEmpty } from 'class-validator';
@Injectable()
export class HealthService {
  constructor(
    private readonly health: checkService,
    private readonly http: HttpHealthIndicator,
    private readonly config: ConfigService,
    @Inject(Database.DRIZZLE)
    private readonly drizzleConnection: MySql2Database,
  ) {}

  pingPong(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck('nestjs', `http://localhost:${this.config.get('HTTP_PORT') || 3000}/api-doc`),
    ]);
  }

  async pingPongMySQL() {
    const statement = sql`select version() as v`;
    const data = await this.drizzleConnection.execute(statement);
    if (isNotEmpty(data[0])) {
      return true;
    }
    return false;
  }
}
