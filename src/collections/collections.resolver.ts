import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { isEthereumAddress } from 'class-validator';
import { CollectionsService } from './collections.service';

import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';
import { Collection } from './schema/collections.schema';

@Resolver(() => Collection)
export class CollectionsResolver {
  constructor(private readonly collectionsService: CollectionsService) {}

  // @Mutation(() => Collection)
  // createCollection(
  //   @Args('createCollectionInput') createCollectionInput: CreateCollectionInput,
  // ) {
  //   return this.collectionsService.create(createCollectionInput);
  // }

  @Query(() => [Collection], { name: 'collections' })
  findAll() {
    return this.collectionsService.findAll();
  }

  /** to ask validate for isEthereum Address */
  @Query(() => Collection, { name: 'CollectionById' })
  findById(
    @Args('collectionId', {
      type: () => String,
      description:
        'CollectionId Example: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63 ',
    })
    id: string,
  ) {
    return this.collectionsService.findById(id);
  }

  // @Query(() => Collection, { name: 'collection' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.collectionsService.findOne(id);
  // }

  // @Mutation(() => Collection)
  // updateCollection(
  //   @Args('updateCollectionInput') updateCollectionInput: UpdateCollectionInput,
  // ) {
  //   return this.collectionsService.update(
  //     updateCollectionInput.id,
  //     updateCollectionInput,
  //   );
  // }

  // @Mutation(() => Collection)
  // removeCollection(@Args('id', { type: () => Int }) id: number) {
  //   return this.collectionsService.remove(id);
  // }
}
