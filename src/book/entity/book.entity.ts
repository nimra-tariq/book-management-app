import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'book' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;
}
