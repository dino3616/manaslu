import { Test } from '@nestjs/testing';
import dotenv from 'dotenv';
import { User } from '../domain/model/user.model';
import { UserRepository } from './user.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createUser = async (prismaService: PrismaService) => {
  const createdUser = await prismaService.user.create({
    data: {},
  });

  return new User(createdUser);
};

export const deleteUser = async (prismaService: PrismaService, UserId: string) => {
  const deletedUser = await prismaService.user.delete({
    where: { id: UserId },
  });

  return new User(deletedUser);
};

describe('UserRepository', () => {
  let prismaService: PrismaService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, UserRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    userRepository = moduleRef.get(UserRepository);
  });

  test('findMany', async () => {
    const createdUser = await createUser(prismaService);

    const foundUsers = await userRepository.findMany({});

    expect(foundUsers).toEqual(expect.any(Array));

    await deleteUser(prismaService, createdUser.id);
  });
});
