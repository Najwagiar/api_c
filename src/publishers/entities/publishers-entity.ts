import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BookEntity } from '../../books/entities/books-entity.js';

@Entity('publishers')
export class PublisherEntity {
  // Primary key menggunakan UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Nama penerbit
  @Column({ type: 'varchar', length: 150 })
  name: string;

  // Waktu data dibuat
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Waktu data diperbarui
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Satu penerbit dapat menerbitkan banyak buku
  @OneToMany(() => BookEntity, (book) => book.publisher)
  books: BookEntity[];
}