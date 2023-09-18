import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { AvailableBooksComponent } from './components/available-books/available-books.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { HeaderComponent } from './components/header/header.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FilteringFormularyComponent } from './components/filtering-formulary/filtering-formulary.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    AvailableBooksComponent,
    ReadingListComponent,
    HeaderComponent,
    BookCardComponent,
    FilteringFormularyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
