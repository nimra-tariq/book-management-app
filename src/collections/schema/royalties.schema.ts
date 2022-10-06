import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Royaltie {
  @Field(() => Int)
  bps: number;

  @Field()
  recipient: string;
}
