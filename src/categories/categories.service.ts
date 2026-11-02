import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/categories-entity.js';
import { CreateCategoryDto } from './dto/create-categories-dto.js';

@Injectable()
export class CategoriesService {
  // Menghubungkan service dengan repository database
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  // Menampilkan semua kategori
  async findAll(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  // Mengambil kategori berdasarkan ID
  async findOne(id: string): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOneBy({ id });

    // Jika kategori tidak ditemukan
    if (!category) {
      throw new NotFoundException(
        `Kategori dengan ID ${id} tidak ditemukan`,
      );
    }

    return category;
  }

  // Menyimpan kategori baru
  async create(category: CreateCategoryDto): Promise<CategoryEntity> {
    const newCategory = this.categoryRepository.create(category);

    return await this.categoryRepository.save(newCategory);
  }

  // Mengupdate kategori berdasarkan ID
  async update(
    id: string,
    category: CreateCategoryDto,
  ): Promise<CategoryEntity> {
    const existingCategory = await this.findOne(id);

    Object.assign(existingCategory, category);

    return await this.categoryRepository.save(existingCategory);
  }

  // Menghapus kategori berdasarkan ID
  async delete(
    id: string,
  ): Promise<{ message: string; deletedId: string }> {
    const category = await this.findOne(id);

    await this.categoryRepository.remove(category);

    return {
      message: `Kategori dengan ID ${id} berhasil dihapus`,
      deletedId: id,
    };
  }
}