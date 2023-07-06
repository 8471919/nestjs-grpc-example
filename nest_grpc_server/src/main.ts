import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '127.0.0.1:5000',
        package: 'user',
        protoPath: path.join(__dirname, '../src/proto/user.proto'),
        loader: {
          enums: String,
          objects: true,
          arrays: true,
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
