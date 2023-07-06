import { ClientOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';

export const GreeterClientOption: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: 'helloworld',
    protoPath: path.join(__dirname, '../../proto/helloworld.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
