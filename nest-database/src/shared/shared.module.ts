import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Database } from '../constants/database';
import { DrizzleModule } from '../common/providers/database/drizzle/drizzle.module';

const providers = [ConfigService, DrizzleModule];
@Global()
@Module({
  providers,
  imports: [DrizzleModule],
  exports: [...providers],
})
export class SharedModule {}
