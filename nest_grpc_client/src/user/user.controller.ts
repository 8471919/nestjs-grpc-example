import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { UserServiceClientOptions } from './config/user-svc.options';
import { IUserService } from './config/user.interface';

@Controller('user')
export class UserController implements OnModuleInit {
  constructor() {}

  @Client(UserServiceClientOptions)
  private readonly userServiceClient: ClientGrpc;

  private userService: IUserService;

  onModuleInit() {
    this.userService =
      this.userServiceClient.getService<IUserService>('UserService');
  }

  @Get(':id')
  async f(): Promise<any> {
    const res = await this.userService.findOne({ id: '1' });

    return res;
  }
}
