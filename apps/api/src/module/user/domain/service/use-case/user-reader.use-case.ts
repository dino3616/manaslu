import type { User } from '../../model/user.model';
import type { FindUsersProps } from './port/user-reader.input';

export interface UserReaderUseCaseInterface {
  findUsers(args: FindUsersProps): Promise<User[]>;
}
