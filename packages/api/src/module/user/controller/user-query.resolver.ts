import { Logger } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@/infra/prisma/generated/user/user/model';
import { PrismaService } from '@/infra/prisma/prisma.service';

@Resolver()
export class UserQuery {
  private readonly logger = new Logger(UserQuery.name);

  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [User])
  async findUsers(): Promise<User[]> {
    this.logger.log('findUsers called');

    const foundUsers = await this.prismaService.user.findMany();

    return foundUsers;
  }
}
