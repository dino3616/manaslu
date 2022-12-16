import { Module } from '@nestjs/common';
import { UserQuery } from './controller/user-query.resolver';

@Module({
  providers: [UserQuery],
})
export class UserModule {}
