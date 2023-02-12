import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '@/common/dto/enum/sort-order.dto';

@InputType()
export class UserOrderInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
}
