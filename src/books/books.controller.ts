import {Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Controller('books')
export class BooksController {
    constructor(private  booksService: BooksService) {}
    //menampilkan data atau mengambil data
    @Get()
    getBooks() {
    return this.booksService.findAll();
    }

    // mengambil data berdasarkan id
    @Get(':id')
    getBookById(@Param('id') id: string) {
        // logic untuk mengambil data buku berdasarkan id dari database
        return this.booksService.findOne(Number(id));
    }

    // menyimpan data baru ke database
    @Post()
    createBook(@Body() book: CreateBookDto){
        // logic untuk menyimpan data buku baru ke database
        return this.booksService.create(book);
    }

    // mengupdate data buku berdasarkan id
    @Put(':id')
    updateBook(
        @Param('id') id: string, 
        @Body() book: CreateBookDto) {
        // logic untuk mengupdate data buku berdasarkan id dari database
        return this.booksService.update(Number(id), book);
    }

    // menghapus data buku berdasarkan id
    @Delete(':id')
    deleteBook(@Param('id') id: string) {
        // logic untuk menghapus data buku berdasarkan id dari database
        return this.booksService.Delete(Number(id));
    }

}