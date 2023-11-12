import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleCounterComponent } from './components/title-counter/title-counter.component';
import { FilterComponent } from './components/filter/filter.component';
import { BooksComponent } from './components/books/books.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleCounterComponent,
    FilterComponent,
    BooksComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
