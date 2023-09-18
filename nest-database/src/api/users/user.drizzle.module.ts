import { Module } from '@nestjs/common';
import { UserDrizzleService } from './user.drizzle.service';
import { UserDrizzleController } from './user.drizzle.controller';

@Module({
  providers: [UserDrizzleService],
  controllers: [UserDrizzleController],
})
export class UserDrizzleModule {}
