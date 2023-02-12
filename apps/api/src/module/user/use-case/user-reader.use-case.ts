import { Inject, Injectable } from '@nestjs/common';
import type { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import type { FindUsersProps } from '../domain/service/use-case/port/user-reader.input';
import type { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class UserReaderUseCase implements UserReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly UserRepository: UserRepositoryInterface,
  ) {}

  async findUsers({ orderBy, cursor, take, skip }: FindUsersProps) {
    const foundUsers = await this.UserRepository.findMany({
      orderBy,
      cursor,
      take,
      skip,
    });

    return foundUsers;
  }
}
