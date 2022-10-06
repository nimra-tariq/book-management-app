import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUrl, MaxLength } from 'class-validator';

@InputType()
export class MetadataInput {
  @Field({ description: 'Collection Logo Image Url' })
  @IsUrl()
  imageUrl?: string;

  @Field({ description: 'Discord Url' })
  @IsUrl()
  discordUrl?: string;

  @Field({ description: 'Maximum 50 characters only' })
  @MaxLength(50)
  @IsNotEmpty()
  description?: string;

  @Field({ description: 'Any External Link to your Collection' })
  @IsNotEmpty()
  externalUrl?: string;

  @Field({ description: 'Banner Image Url for Collection' })
  @IsUrl()
  bannerImageUrl?: string;

  @Field({ description: 'Twitter User Name' })
  @IsNotEmpty()
  twitterUsername?: string;
}
