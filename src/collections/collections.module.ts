import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CollectionsResolver } from './collections.resolver';
import { Collection } from './entities/collection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collection])],
  providers: [CollectionsResolver, CollectionsService],
})
export class CollectionsModule {}
