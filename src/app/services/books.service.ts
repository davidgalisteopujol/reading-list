import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Book, Books } from '../interfaces/book.interface';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = 'assets/json/books.json';
  private http = inject(HttpClient);
  private booksLength$ = new Subject<number>();


  getBooks(): Observable<Books> {
    return this.http.get<Books>(this.apiUrl);
  }

  setBooksLength(value: number): void {
    this.booksLength$.next(value);
  }

  getBooksLength(): Observable<number> {
    return this.booksLength$.asObservable();
  }

  getFilteredBooks(pages: number): Observable<Book[]> {
    return this.http.get<{ library: { book: Book }[] }>(this.apiUrl).pipe(
      map(response => response.library.map(item => item.book)),
      map(books => {
        console.log("Libros sin filtrar:", books); // Añadido para depuración
        return books.filter(book => book && book.pages !== undefined && book.pages <= pages);
      })
    );
  }


}