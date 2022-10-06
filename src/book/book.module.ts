import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entity/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookResolver } from './book.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService, BookResolver],
})
export class BookModule {}
