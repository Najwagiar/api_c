import { Injectable } from '@nestjs/common';
import { Book } from './entities/books-entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {
    // data dari database
    private books: Book[] = [
        {
            id: 1,
            name: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            isbn: '978-0-7432-7356-5',
            publishedYear: 1925,
            isAvailable: true
        },
        {
            id: 2,
            name: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            publishedYear: 1960,
            isAvailable: true
        }
    ];
    findAll(): Book[]{
        return this.books;
    }

    // mengambil data buku berdasarkan id dari database
    findOne(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    // menyimpan data buku baru ke database
    create(book: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            name: book.name,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            isAvailable: true
        }
        // simpan ke database
        this.books.push(newBook);
        return newBook;
    }

    // mengupdate data buku berdasarkan id dari database
    update(id: number, book: CreateBookDto): Book | undefined {
        const index = this.books.findIndex(item => item.id === id);
        if (index !== -1) {
            this.books[index] = {
                ...this.books[index],
                name: book.name,
                author: book.author,
                isbn: book.isbn,
                publishedYear: book.publishedYear,
            };
            return this.books[index];
        }

        return undefined;
    }

    // menghapus data buku berdasarkan id dari database
    Delete(id: number): boolean {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
}