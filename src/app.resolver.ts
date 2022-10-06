// // import { Query } from "@nestjs/common";
// // import { Resolver } from "@nestjs/graphql";

import { Resolver, Query } from '@nestjs/graphql';

// import { Query } from '@nestjs/common';
// import { Resolver } from '@nestjs/graphql';

// // @Resolver()
// // export class AppResolver {

// // }

@Resolver(of => String)
export class AppResolver {
  @Query(returns => String)
  sayHello(): String {
    return 'Hello World!';
  }
}

// @Resolver((of) => String)
// export class AppResolver {
//   @Query(() => String)
//   sayHello(): string {
//     return 'Hello World!';
//   }
// }
