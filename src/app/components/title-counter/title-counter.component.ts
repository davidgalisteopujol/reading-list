import { Component, OnInit, inject } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-title-counter',
  templateUrl: './title-counter.component.html',
  styleUrls: ['./title-counter.component.css']
})
export class TitleCounterComponent implements OnInit {
 
public totalBooks: number = 0;
  private booksService = inject(BooksService);

  ngOnInit(): void {
    this.getBooksLength()
  }

  getBooksLength(){
    this.booksService.getBooksLength().subscribe(response => this.totalBooks = response)
  }

  
}
