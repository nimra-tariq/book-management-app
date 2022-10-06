import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddBookArgs } from './args/addBook.args';
import { UpdateBookArgs } from './args/updateBook.args';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';

@Resolver((of) => Book)
export class BookResolver {
  constructor(private booksService: BookService) {}

  @Query((returns) => [Book], { name: 'books' })
  getAllBooks() {
    return this.booksService.findAll();
  }

  @Query((returns) => [Book], { name: 'bookById' })
  getBookById(@Args('bookId', { type: () => Int }) id: number) {
    return this.booksService.findOne(id);
  }

  @Query((returns) => String, { name: 'deleteBook' })
  deleteBookById(@Args('bookId', { type: () => Int }) id: number) {
    console.log(id, 'id to delete');
    return this.booksService.delete(id);
  }

  @Mutation((returns) => String, { name: 'AddBook' })
  addBook(@Args('AddBookArgs') AddBookArgs: AddBookArgs) {
    return this.booksService.add(AddBookArgs);
  }
  @Mutation((returns) => String, { name: 'UpdateBook' })
  updateBook(@Args('UpdateBookArgs') UpdateBookArgs: UpdateBookArgs) {
    return this.booksService.update(UpdateBookArgs);
  }
}

//   @Mutation((returns)=>String,{name:"UpdateBook"})
//   updateBook(@Args('UpdateBookArgs')UpdateBookArgs:UpdateBookArgs){
//       return this.booksService.add(AddBookArgs)
//   }
// }

//   @Query(returns => Book)
//   async Book(@Args('id', { type: () => Int }) id: number) {
//     return this.BooksService.findOneById(id);
//   }

//   @ResolveField()
//   async posts(@Parent() Book: Book) {
//     const { id } = Book;
//     return this.postsService.findAll({ BookId: id });
//   }
// }
