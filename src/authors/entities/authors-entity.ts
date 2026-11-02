import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BookEntity } from '../../books/entities/books-entity.js';

@Entity('authors')
export class AuthorEntity {
  // Primary key menggunakan UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Nama penulis
  @Column({ type: 'varchar', length: 150 })
  name: string;

  // Waktu data dibuat
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Waktu data diperbarui
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relasi banyak penulis dengan banyak buku
  @ManyToMany(() => BookEntity, (book) => book.authors)
  books: BookEntity[];
}
