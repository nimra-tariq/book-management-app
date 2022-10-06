import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsNotEmpty } from 'class-validator';

@InputType()
export class RoyaltyInput {
  @Field({ description: 'Collection Logo Image Url' })
  @IsNumber()
  @IsNotEmpty()
  bps?: number;

  @Field({ description: 'Discord Url' })
  @IsNotEmpty()
  recipient?: string;
}
