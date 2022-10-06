import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class AddBookArgs {
  @Field()
  @IsNotEmpty()
  title: string;
  @Field()
  @IsNotEmpty()
  // @IsNumber()
  price: string;
}
