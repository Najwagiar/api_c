import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CustomerEntity } from '../../customers/entities/customers-entity.js';

@Entity('orders')
export class OrderEntity {
  // Primary key menggunakan UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Relasi pesanan dengan pelanggan
  @ManyToOne(() => CustomerEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  // Nomor pesanan harus unik
  @Column({ type: 'varchar', length: 50, unique: true })
  orderNumber: string;

  // Status pesanan
  @Column({ type: 'varchar', length: 30, default: 'pending' })
  status: string;

  // Total harga pesanan
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  totalAmount: number;

  // Waktu pesanan dibuat
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Waktu pesanan diperbarui
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
