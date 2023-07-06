export interface HelloRequest {
  name: string;
}

export interface HelloReply {
  message: string;
}

export interface Greeter {
  SayHello(params: HelloRequest): Promise<HelloReply>;
}
