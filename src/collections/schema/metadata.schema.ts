import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Metadata {
  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  discordUrl?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  externalUrl?: string;

  @Field({ nullable: true })
  bannerImageUrl?: string;

  @Field({ nullable: true })
  twitterUsername?: string;
}
