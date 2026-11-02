import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { CreateCategoryDto } from './dto/create-categories-dto.js';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // Menampilkan semua data kategori
  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  // Mengambil data kategori berdasarkan ID
  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  // Menambahkan kategori baru
  @Post()
  createCategory(@Body() category: CreateCategoryDto) {
    return this.categoriesService.create(category);
  }

  // Mengupdate kategori berdasarkan ID
  @Put(':id')
  updateCategory(
    @Param('id') id: string,
    @Body() category: CreateCategoryDto,
  ) {
    return this.categoriesService.update(id, category);
  }
    // Menghapus kategori berdasarkan ID
    @Delete(':id')
    deleteCategory(@Param('id') id: string) {
      return this.categoriesService.delete(id);
    }
}