// books.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { BooksService } from 'src/app/services/books.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {

  public avaibleBooks: Book[] = [];
  public readBooks: Book[] = [];

  private booksService = inject(BooksService);
  

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe((response: any) => {
      if (response && response.library) {
        this.avaibleBooks = response.library;
        this.booksService.setBooksLength(response.library.length)
      }
    });
  }

  drop(event: CdkDragDrop<Book[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.booksService.setBooksLength(this.avaibleBooks.length)
  }


 



}
