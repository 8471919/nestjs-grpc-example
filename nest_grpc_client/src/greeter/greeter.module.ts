import { Module } from '@nestjs/common';
import { GreeterController } from './greeter.controller';

@Module({
  imports: [],
  controllers: [GreeterController],
  providers: [],
})
export class GreeterModule {}
