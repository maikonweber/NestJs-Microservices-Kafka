import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './create-orderevent';
import { CreateOrderRequest } from './dto/create-orderDTO';


@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka) { }
    createOrder({userId, price}: CreateOrderRequest) {
      console.log(userId, price);
      this.billingClient.emit(
        'order-created',
        new OrderCreatedEvent('123', userId, price),
      );
    }
  }
