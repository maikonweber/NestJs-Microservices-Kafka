import { Body, Controller, Inject, Logger, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-orderDTO';
import { AppService } from './app.service';

@Controller('create-order')
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequest) {
    console.log(createOrderRequest)
    this.appService.createOrder(createOrderRequest);
  }
}
