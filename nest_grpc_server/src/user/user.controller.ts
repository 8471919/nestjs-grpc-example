import { Controller } from '@nestjs/common';
import { UserService } from './user.sevice';
import { GrpcMethod } from '@nestjs/microservices';
import { FindUserName, User } from './config/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'findOne')
  async f(param: User): Promise<FindUserName> {
    const res = await this.userService.findOne(param);

    return { username: res };
  }
}
