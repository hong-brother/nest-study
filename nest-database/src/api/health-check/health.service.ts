import { HealthCheckService as checkService, HttpHealthIndicator, HealthCheckResult } from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Inject } from '@nestjs/common';
import { OrmName } from '../../common/constants/orm-name';
import { PgDatabase } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
export class HealthService {
  constructor(
    private readonly health: checkService,
    private readonly http: HttpHealthIndicator,
    private readonly config: ConfigService,
    @Inject(OrmName.TYPE_ORM)
    private readonly typeormDataSource: DataSource,
    @Inject(OrmName.DRIZZLE_ORM)
    private readonly drizzleOrmDataSource: PgDatabase<any>,
  ) {}

  pingPong(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck('nestjs', `http://localhost:${this.config.get('HTTP_PORT') || 3000}/api-doc`),
    ]);
  }

  pingTypeOrm() {
    return this.typeormDataSource.query(`select version()`);
  }

  pingDrizzleOrm() {
    const statement = sql`select version() as v`;
    return this.drizzleOrmDataSource.execute(statement);
  }
}
