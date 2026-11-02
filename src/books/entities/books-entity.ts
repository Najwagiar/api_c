import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CategoryEntity } from '../../categories/entities/categories-entity.js';
import { PublisherEntity } from '../../publishers/entities/publishers-entity.js';
import { AuthorEntity } from '../../authors/entities/authors-entity.js';

@Entity('books')
export class BookEntity {
  // Primary key menggunakan UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Banyak buku dapat memiliki satu kategori
  @ManyToOne(() => CategoryEntity, (category) => category.books, {
    nullable: false,
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  // Banyak buku dapat diterbitkan oleh satu penerbit
  @ManyToOne(() => PublisherEntity, (publisher) => publisher.books, {
    nullable: false,
  })
  @JoinColumn({ name: 'publisher_id' })
  publisher: PublisherEntity;
  
  // Satu buku dapat ditulis oleh banyak penulis
@ManyToMany(() => AuthorEntity, (author) => author.books)
@JoinTable({
  name: 'book_authors',
  joinColumn: {
    name: 'book_id',
    referencedColumnName: 'id',
  },
  inverseJoinColumn: {
    name: 'author_id',
    referencedColumnName: 'id',
  },
})
authors: AuthorEntity[];

  // Judul buku
  @Column({ type: 'varchar', length: 30 })
  title: string;

  // ISBN harus unik untuk setiap buku
  @Column({ type: 'varchar', length: 45, unique: true })
  isbn: string;

  // Tahun terbit
  @Column({ type: 'int', default: 0 })
  publishedYear: number;

  // Status ketersediaan buku
  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  // Harga buku
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  price: number;

  // Jumlah stok buku
  @Column({ type: 'int', default: 0 })
  stock: number;

  // Waktu data dibuat
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Waktu data diperbarui
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Waktu penghapusan secara soft delete
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date | null;
}