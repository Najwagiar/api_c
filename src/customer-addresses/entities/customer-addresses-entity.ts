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

@Entity('customer_addresses')
export class CustomerAddressEntity {
  // Primary key menggunakan UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Relasi alamat ke pelanggan
  @ManyToOne(() => CustomerEntity, {
  nullable: false,
    })
    @JoinColumn({ name: 'customer_id' })
    customer: CustomerEntity;

  // Nama penerima
  @Column({ type: 'varchar', length: 150 })
  recipientName: string;

  // Nomor telepon penerima
  @Column({ type: 'varchar', length: 20 })
  phone: string;

  // Alamat lengkap
  @Column({ type: 'text' })
  address: string;

  // Kota
  @Column({ type: 'varchar', length: 100 })
  city: string;

  // Kode pos
  @Column({ type: 'varchar', length: 10 })
  postalCode: string;

  // Waktu data dibuat
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Waktu data diperbarui
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
