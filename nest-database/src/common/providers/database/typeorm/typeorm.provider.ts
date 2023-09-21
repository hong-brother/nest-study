import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { OrmName } from '../../../constants/orm-name';
import { DataSource } from 'typeorm';

export const typeormProvider = {
  provide: OrmName.TYPE_ORM,
  useFactory: (config: ConfigService) => {
    const dataSource = new DataSource({
      type: 'postgres',
      host: config.get<string>('PG_HOST'),
      port: config.get<number>('PG_PORT'),
      database: config.get<string>('PG_DATABASE'),
      username: config.get<string>('PG_USER'),
      password: config.get<string>('PG_PASSWORD'),
      synchronize: false,
      logging: config.get('LOG_LEVEL') === 'debug',
      entities: [join(__dirname, `/src/common/entity/typeorm/*.entity{.ts,.js}`)],
      // migrations: []
      // subscribers: []
    });
    return dataSource.initialize();
  },
  inject: [ConfigService],
};
