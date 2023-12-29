import { Inject, Injectable } from "@nestjs/common";
import { OrderCreatedEvent } from "./create-orderevent";
import { ClientKafka } from "@nestjs/microservices";
import { GetUserRequest } from "./user-requestDTO";

@Injectable()
export class AppService {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka
    ) {

    }

    handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
        console.log(orderCreatedEvent)
        this.authClient.send('get-user', new GetUserRequest(orderCreatedEvent.userId)).subscribe((users) => {
            console.log(`Billing users stripe ID ${users.stripeUserId} a price order $${orderCreatedEvent.price}`)
        })
     }
}