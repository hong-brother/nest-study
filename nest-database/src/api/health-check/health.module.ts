import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthService } from './health.service';
import { HttpModule } from '@nestjs/axios';
import { TweetsRepository } from '../../common/repositories/tweets.repository';
import { DrizzleModule } from '../../common/providers/database/drizzle/drizzle.module';

@Module({
  imports: [TerminusModule, HttpModule],
  providers: [HealthService, TweetsRepository],
  controllers: [HealthController],
})
export class HealthModule {}
