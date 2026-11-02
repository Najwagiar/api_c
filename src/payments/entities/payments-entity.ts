import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { OrderEntity } from '../../orders/entities/orders-entity.js';

@Entity('payments')
export class PaymentEntity {
  // Primary key menggunakan UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Relasi pembayaran dengan pesanan
  @OneToOne(() => OrderEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  // Metode pembayaran
  @Column({ type: 'varchar', length: 50 })
  paymentMethod: string;

  // Jumlah pembayaran
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  // Status pembayaran
  @Column({ type: 'varchar', length: 30, default: 'pending' })
  status: string;

  // Waktu pembayaran berhasil
  @Column({ type: 'timestamp', nullable: true })
  paidAt: Date | null;

  // Waktu data pembayaran dibuat
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}