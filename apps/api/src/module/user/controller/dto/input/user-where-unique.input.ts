import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id!: string;
}
