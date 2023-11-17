// books.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Book, Books } from 'src/app/interfaces/book.interface';
import { BooksService } from 'src/app/services/books.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import { FilterBooksService } from '../../services/filter-books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {

  public avaibleBooks: Book[] = [];
  public readBooks: Book[] = [];
  private booksService = inject(BooksService);
  private filterBooksService = inject(FilterBooksService)


  ngOnInit(): void {
    this.getBooks();
    //  this.getBooks2()
  }


  getBooks(): void {
    this.booksService.getBooks().subscribe((response: Books) => {
      if (response && response.library) {
        this.avaibleBooks = response.library.map((libraryItem:any) => libraryItem.book);
        this.booksService.setBooksLength(this.avaibleBooks.length);
        this.filterBooksService.setLeakedBooks(this.avaibleBooks)
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


   getBooks2(){
     this.booksService.getFilteredBooks(500).subscribe(response=>console.log(response)
     )
   }




}
