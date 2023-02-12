import type { SortOrder } from '@/common/dto/enum/sort-order.dto';

export type FindUsersProps = {
  orderBy?: {
    id?: keyof typeof SortOrder;
  }[];
  cursor?: {
    id?: string;
  };
  take?: number;
  skip?: number;
};
