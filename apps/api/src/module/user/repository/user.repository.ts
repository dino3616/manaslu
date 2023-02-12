import { Injectable } from '@nestjs/common';
import { User } from '../domain/model/user.model';
import type { FindManyProps, UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany({ orderBy, cursor, take, skip }: FindManyProps) {
    const foundUsers = await this.prismaService.user.findMany({
      orderBy,
      cursor,
      take,
      skip,
    });

    return foundUsers.map((foundUser) => new User(foundUser));
  }
}
