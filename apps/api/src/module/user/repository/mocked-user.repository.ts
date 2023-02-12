import { Injectable } from '@nestjs/common';
import { User } from '../domain/model/user.model';
import type { UserRepositoryInterface } from '../domain/service/repository/user.repository';

@Injectable()
export class MockedUserRepository implements UserRepositoryInterface {
  async findMany() {
    const foundUsers = [
      {
        id: 'abc-123',
      },
      {
        id: 'abc-456',
      },
    ];

    return foundUsers.map((foundUser) => new User(foundUser));
  }
}
