import { Component, OnInit, inject } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
 

  private booksService = inject(BooksService);
  currentPages: number = 0;

  formatLabel(value: number): string {
    return `${value}`;
  }

   updateBooks(): void {
     this.booksService.getFilteredBooks(this.currentPages).subscribe(books => {
       console.log("Libros filtrados:", books);
     });
   }
}


/*
ngOnInit(): void {
  this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value => {
      this.getResults(value);
    })
};


onKeyPress(searchText: string) {
  this.debouncer.next(searchText);
};


getResults(value: any) {
  if (this.searchText.length == 0) {
    this.universities = [];
  } else if (this.country.length > 0) {
    this.searchText = value
    this.universitiesService.getUniversities(this.country, this.searchText)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(universities => {
        this.universities = universities
      });
  };
};*/