import { ConfigService } from '@nestjs/config';

export const typeormProvider = {
  provide: '',
  useFactory: (config: ConfigService) => {},
  inject: [ConfigService],
};
