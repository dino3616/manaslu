import { Test } from '@nestjs/testing';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserReaderUseCase } from './user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('UserReaderUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let timelineReaderUseCase: UserReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository }, UserReaderUseCase],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    timelineReaderUseCase = moduleRef.get(UserReaderUseCase);
  });

  test('findUsers', async () => {
    const expectUser = await mockedUserRepository.findMany();

    const foundUsers = await timelineReaderUseCase.findUsers({});

    expect(foundUsers).toEqual(expectUser);
  });
});
