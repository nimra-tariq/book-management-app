import { Royaltie } from './royalties.schema';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Metadata } from './metadata.schema';

/** Schema Type Collections */

@ObjectType()
export class Collection {
  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field()
  slug?: string;

  @Field(() => Metadata)
  metadata?: Metadata;

  @Field(() => Int)
  tokenCount?: number;

  @Field(() => Royaltie)
  royalties?: Royaltie;
}
