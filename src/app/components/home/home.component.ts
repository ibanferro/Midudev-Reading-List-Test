import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { FilteringData } from '../filtering-formulary/filtering-formulary.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bookList: Book[] = [];
  availableBookList: Book[] = [];

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList()
  {
    this.bookService.getBookList().subscribe(
      {next: (response) => {
        this.bookList = response;
        this.availableBookList = response;
      },
      error: (error) => {
        console.error(error);
      }}
    )
  }

  onFilteringFormularyDataChange(filteringData: FilteringData)
  {
    this.availableBookList = this.bookList.filter(({book}) =>
      (filteringData.genre === 'All')? book.pages <= filteringData.pages : book.pages <= filteringData.pages && book.genre === filteringData.genre
    );
  }

}
