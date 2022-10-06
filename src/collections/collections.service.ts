import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collection } from './entities/collection.entity';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectRepository(Collection)
    private collectionsRepository: Repository<Collection>,
  ) {}

  // async create(input: CreateCollectionInput) {
  //   const collection: Collection = new Collection();
  //   collection.title = args.title;
  //   collection.price = args.price;
  //   await this.booksRepository.save(book);
  //   return 'Book Added Successfully';
  // }

  findAll(): Promise<Collection[]> {
    try {
      return this.collectionsRepository.find();
    } catch (error) {
      throw new ForbiddenException({ message: 'Error Occured' });
    }
  }

  async findById(id: string): Promise<Collection> {
    try {
      const collection: Collection = await this.collectionsRepository.findOneBy(
        { id },
      );
      if (!collection)
        throw new ForbiddenException({ message: 'Collection not found' });
      return collection;
    } catch (error) {
      throw new ForbiddenException({ message: 'CollectionId not Found' });
    }
  }
  // update(id: number, updateCollectionInput: UpdateCollectionInput) {
  //   return `This action updates a #${id} collection`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} collection`;
  // }
}
