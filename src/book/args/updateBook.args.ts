import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateBookArgs {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  price: string;
}
