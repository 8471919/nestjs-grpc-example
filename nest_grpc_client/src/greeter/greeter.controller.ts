import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { GreeterClientOption } from './config/greeter.options';
import { Greeter } from './config/greeter.interface';

@Controller('greeter')
export class GreeterController implements OnModuleInit {
  constructor() {}

  @Client(GreeterClientOption)
  private readonly greeterServiceClient: ClientGrpc;

  private greeterService: Greeter;

  onModuleInit() {
    this.greeterService =
      this.greeterServiceClient.getService<Greeter>('Greeter');
  }

  @Get()
  async getGreeter(): Promise<any> {
    const res = await this.greeterService.SayHello({ name: 'hansu' });

    return res;
  }
}
