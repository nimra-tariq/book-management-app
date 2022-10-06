import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddBookArgs } from './args/addBook.args';
import { UpdateBookArgs } from './args/updateBook.args';
import { Book } from './entity/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }
  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<{ message: string }> {
    const { affected } = await this.booksRepository.delete(id);
    console.log(affected, 'response');
    if (!affected) {
      throw new ForbiddenException({ message: 'Invalid Book Id' });
    }
    return { message: 'Book Deleted Successflly' };
  }

  async update(args: UpdateBookArgs): Promise<string> {
    try {
      const book: Book = await this.booksRepository.findOneBy({ id: args.id });
      console.log(book, 'book looged out');
      book.title = args.title;
      book.price = args.price;
      return 'Book Updated Successfully';
    } catch (error) {
      throw new ForbiddenException({ message: 'Invalid Book Id' });
    }
  }

  async add(args: AddBookArgs): Promise<string> {
    console.log(args, 'argument logged');
    const book: Book = new Book();
    book.title = args.title;
    book.price = args.price;
    await this.booksRepository.save(book);
    return 'Book Added Successfully';
  }
}
