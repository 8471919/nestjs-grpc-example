import { Observable } from 'rxjs';

export interface User {
  id: string;
}

export interface FindUserName {
  username: string;
}

export interface IUserService {
  findOne(param: User): Promise<FindUserName>;
}
