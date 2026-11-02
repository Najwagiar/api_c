import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { OrderEntity } from '../../orders/entities/orders-entity.js';
import { BookEntity } from '../../books/entities/books-entity.js';

@Entity('order_items')
export class OrderItemEntity {
  // Primary key menggunakan UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Relasi ke pesanan
  @ManyToOne(() => OrderEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  // Relasi ke buku
  @ManyToOne(() => BookEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'book_id' })
  book: BookEntity;

  // Jumlah buku yang dibeli
  @Column({ type: 'int' })
  quantity: number;

  // Harga buku saat transaksi
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  // Subtotal harga buku
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: number;

  // Waktu data dibuat
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Waktu data diperbarui
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}