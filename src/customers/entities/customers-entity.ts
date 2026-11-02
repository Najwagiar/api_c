import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
export class CustomerEntity {
  // Primary key menggunakan UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Nama pelanggan
  @Column({ type: 'varchar', length: 150 })
  name: string;

  // Email harus unik
  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  // Nomor telepon pelanggan
  @Column({ type: 'varchar', length: 20 })
  phone: string;

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
