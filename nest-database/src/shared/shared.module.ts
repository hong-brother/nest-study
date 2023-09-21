import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseProviders } from '../common/providers/database';

const providers = [ConfigService, ...DatabaseProviders];
@Global()
@Module({
  providers,
  imports: [],
  exports: [...providers, ...DatabaseProviders],
})
export class SharedModule {}
