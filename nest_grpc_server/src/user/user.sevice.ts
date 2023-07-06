import { Injectable } from '@nestjs/common';
import { FindUserName, IUserService, User } from './config/user.interface';

@Injectable()
export class UserService implements IUserService {
  constructor() {}

  async findOne(param: User): Promise<string> {
    return 'hansu';
  }
}
