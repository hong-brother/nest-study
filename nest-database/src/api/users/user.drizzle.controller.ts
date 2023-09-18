import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post } from '@nestjs/common';
import { UserDrizzleService } from './user.drizzle.service';

@ApiTags('drizzle')
@Controller('/drizzle')
export class UserDrizzleController {
  constructor(private userDrizzleService: UserDrizzleService) {}

  @Get('all')
  getAllUser() {
    return this.userDrizzleService.findAll();
  }

  @Post()
  addUser() {
    return this.userDrizzleService.add();
  }
}
