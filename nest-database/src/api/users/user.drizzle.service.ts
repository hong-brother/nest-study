import { Inject, Injectable } from '@nestjs/common';
import { Database } from '../../constants/database';
import { MySql2Database } from 'drizzle-orm/mysql2/driver';
import { userDrizzle } from '../../common/providers/database/drizzle/entity/user.drizzle';

@Injectable()
export class UserDrizzleService {
  constructor(
    @Inject(Database.DRIZZLE)
    private readonly dz: MySql2Database,
  ) {}

  findAll() {
    return this.dz.select().from(userDrizzle);
  }

  add() {
    return this.dz.insert(userDrizzle).values({ name: '~', id: 1 });
  }
}
