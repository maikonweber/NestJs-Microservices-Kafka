import { Controller, Inject, Logger, OnModuleInit } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { OrderCreatedEvent } from './create-orderevent';
import { AppService } from './app.service';
import { ClientKafka } from "@nestjs/microservices";


@Controller()
export class AppController implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
    private readonly appService: AppService) { }

  @EventPattern('order-created')
  handleOrderCreated(ordeCreateEvent: OrderCreatedEvent) {
    this.appService.handleOrderCreated(ordeCreateEvent);
  }
  onModuleInit() {
    this.authClient.subscribeToResponseOf('get-user');
  }


}
