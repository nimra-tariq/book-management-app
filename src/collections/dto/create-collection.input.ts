import { MetadataInput } from './metadata.input';
import { InputType, Field } from '@nestjs/graphql';
import { IsEthereumAddress, IsJSON, IsNotEmpty } from 'class-validator';
import { RoyaltyInput } from './royalty.input';

@InputType()
export class CreateCollectionInput {
  @IsNotEmpty()
  @IsEthereumAddress()
  @Field({ description: 'Example: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63' })
  id: string;

  @Field({ description: 'Example: bored' })
  @IsNotEmpty()
  name?: string;

  @Field({ description: 'Example: boredapeyachtclub' })
  @IsNotEmpty()
  slug?: string;

  @Field()
  @IsJSON()
  @IsNotEmpty()
  metadata?: MetadataInput;

  @Field()
  @IsJSON()
  @IsNotEmpty()
  royalties?: RoyaltyInput;
}
