
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title: string;
    price: string;
}

export interface UpdateBookArgs {
    id: number;
    title: string;
    price: string;
}

export interface Book {
    id: number;
    title: string;
    price: string;
}

export interface Royaltie {
    bps: number;
    recipient: string;
}

export interface Metadata {
    imageUrl?: Nullable<string>;
    discordUrl?: Nullable<string>;
    description?: Nullable<string>;
    externalUrl?: Nullable<string>;
    bannerImageUrl?: Nullable<string>;
    twitterUsername?: Nullable<string>;
}

export interface Collection {
    id: string;
    name: string;
    slug: string;
    metadata: Metadata;
    tokenCount: number;
    royalties: Royaltie;
}

export interface IQuery {
    sayHello(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    bookById(bookId: number): Book[] | Promise<Book[]>;
    deleteBook(bookId: number): string | Promise<string>;
    collections(): Collection[] | Promise<Collection[]>;
    CollectionById(collectionId: string): Collection | Promise<Collection>;
}

export interface IMutation {
    AddBook(AddBookArgs: AddBookArgs): string | Promise<string>;
    UpdateBook(UpdateBookArgs: UpdateBookArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
