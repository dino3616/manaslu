import { Module } from '@nestjs/common';
import { UserQuery } from './controller/user-query.resolver';
import { UserRepository } from './repository/user.repository';
import { UserReaderUseCase } from './use-case/user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [
    { provide: InjectionToken.USER_REPOSITORY, useClass: UserRepository },
    { provide: InjectionToken.USER_READER_USE_CASE, useClass: UserReaderUseCase },
    UserQuery,
  ],
  exports: [{ provide: InjectionToken.USER_REPOSITORY, useClass: UserRepository }],
})
export class UserModule {}
