import type { User } from '../../model/user.model';
import type { SortOrder } from '@/common/dto/enum/sort-order.dto';

export type FindManyProps = {
  orderBy?: {
    id?: keyof typeof SortOrder;
  }[];
  cursor?: {
    id?: string;
  };
  take?: number;
  skip?: number;
};

export interface UserRepositoryInterface {
  findMany(args: FindManyProps): Promise<User[]>;
}
