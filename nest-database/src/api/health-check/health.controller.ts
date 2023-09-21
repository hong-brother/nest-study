import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';

@ApiTags('health-check')
@Controller('health')
export class HealthController {
  constructor(private healthCheckerService: HealthService) {}

  @Get('api')
  @HealthCheck()
  async check() {
    return this.healthCheckerService.pingPong();
  }

  @Get('typeorm')
  @HealthCheck()
  checkTypeOrm() {
    return this.healthCheckerService.pingTypeOrm();
  }

  @Get('drizzle')
  @HealthCheck()
  checkDrizzleOrm() {
    return this.healthCheckerService.pingDrizzleOrm();
  }
}
