import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-userDTO';

@Injectable()
export class AppService {
  private readonly users: any = [
    {
      userId: '123',
      stripedUserId: '4321'
    },
    {
      userId: '456',
      stripedUserId: '6789'
    }
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    console.log(getUserRequest)
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
