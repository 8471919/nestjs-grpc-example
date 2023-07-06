import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GreeterModule } from './greeter/greeter.module';

@Module({
  imports: [UserModule, GreeterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
