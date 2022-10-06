// import { ObjectType, Field, Int } from '@nestjs/graphql';

// @ObjectType()
// export class Collection {
//   @Field(() => Int, { description: 'Example field (placeholder)' })
//   exampleField: number;
// }

/** NFT Collections Entity */

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Collection {
  /** the length of binanace address is 42 characters */
  @PrimaryColumn({ length: '42' })
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({ type: 'json' })
  metadata: {
    imageUrl?: string | undefined;
    discordUrl?: string | undefined;
    description?: string | undefined;
    externalUrl?: string | undefined;
    bannerImageUrl?: string | undefined;
    twitterUsername?: string | undefined;
  };

  @Column({ type: 'integer', default: 0 })
  tokenCount: number;

  @Column({ type: 'json' })
  royalties: { bps: number; recipient: string };

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

// export type CollectionsEntityUpdateParams = {
//   id?: string;
//   slug?: string;
//   name?: string;
//   metadata?: string;
//   royalties?: string;
//   community?: string;
//   contract?: string;
//   tokenIdRange?: string;
//   tokenSetId?: string;
//   nonFlaggedTokenSetId?: string | null;
//   tokenCount?: number;
//   createdAt?: string;
//   updatedAt?: string;
//   day1Volume?: number;
//   day1Rank?: number;
//   day7Volume?: number;
//   day7Rank?: number;
//   day30Volume?: number;
//   day30Rank?: number;
//   allTimeVolume?: number;
//   allTimeRank?: number;
//   indexMetadata?: boolean;
//   lastMetadataSync?: string;
// };

// export type CollectionsMetadata = {
//   imageUrl?: string | undefined;
//   discordUrl?: string | undefined;
//   description?: string | undefined;
//   externalUrl?: string | undefined;
//   bannerImageUrl?: string | undefined;
//   twitterUsername?: string | undefined;
//   openseaVerificationStatus?: string | undefined;
// };

// export type CollectionsRoyalties = {
//   bps: number;
//   recipient: string;
// };
