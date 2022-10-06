import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookMarkModule } from './book-mark/book-mark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { BookModule } from './book/book.module';
import { Book } from './book/entity/book.entity';
import { CollectionsModule } from './collections/collections.module';
import { Collection } from './collections/entities/collection.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookMarkModule,
    BookModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'nimra123',
      database: 'nest',
      entities: [Book, Collection],
      synchronize: true,
    }),
    BookModule,
    CollectionsModule,
  ],
  providers: [AppResolver],
  controllers: [],
})
export class AppModule {}
