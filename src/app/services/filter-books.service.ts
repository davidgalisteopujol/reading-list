import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterBooksService {

  private leakedBooks$ = new Subject<Book[]>();

  setLeakedBooks(value: Book[]): void {
    this.leakedBooks$.next(value);
  }

  getLeakedBooks(): Observable<Book[]> {
    return this.leakedBooks$.asObservable();
  }
}
