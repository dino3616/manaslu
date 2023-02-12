import { registerEnumType } from '@nestjs/graphql';

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType<typeof SortOrder>(SortOrder, { name: 'SortOrder' });
