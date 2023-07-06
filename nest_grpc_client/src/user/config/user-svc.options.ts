import { ClientOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';

export const UserServiceClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '127.0.0.1:5000',
    package: 'user',
    protoPath: path.join(__dirname, '../../proto/user.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
