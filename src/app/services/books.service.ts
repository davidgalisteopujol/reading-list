import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../interfaces/book.interface';




@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = 'assets/json/books.json'; 
  private http = inject(HttpClient)
  private booksLength$ = new Subject<number>();

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl)
  }

  setBooksLength(value:number): void {
    this.booksLength$.next(value);
  }

  getBooksLength():Observable<number> {
    return this.booksLength$.asObservable();
  }
}
