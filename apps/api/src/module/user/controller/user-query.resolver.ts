import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import type { User as UserModel } from '../domain/model/user.model';
import type { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { FindUsersArgs } from './dto/args/find-users.args';
import { User } from './dto/object/user.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class UserQuery {
  private readonly logger = new Logger(UserQuery.name);

  constructor(
    @Inject(InjectionToken.USER_READER_USE_CASE)
    private readonly UserReaderUseCase: UserReaderUseCaseInterface,
  ) {}

  @Query(() => [User])
  async findUsers(@Args() args: FindUsersArgs): Promise<UserModel[]> {
    this.logger.log('findUsers called');
    this.logger.log(args);

    const foundUsers = await this.UserReaderUseCase.findUsers({
      orderBy: args.orderBy,
      cursor: args.cursor,
      take: args.take,
      skip: args.skip,
    });

    return foundUsers;
  }
}
