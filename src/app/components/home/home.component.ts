import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
import { FilteringData } from '../filtering-formulary/filtering-formulary.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bookList: Book[] = [];
  availableBookList: Book[] = [];
  readingListBooks: Book[] = [];



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

        const probability: number = 0.3;

        this.readingListBooks = this.bookList.filter((_) => Math.random() > probability);
        //this.readingListBooks = [];
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

  removeBookFromReadingList(book: Book)
  {
    this.readingListBooks = this.readingListBooks.filter((readingListBook) => readingListBook.book.title !== book.book.title);
  }

  addBookToReadingList()
  {
/*     if(this.readingListBooks.find((readingListBook) => readingListBook.book.title === book.book.title)) return;
    this.readingListBooks.push(book); */
  }

  onDragStart()
  {
    console.log('Drag start');
  }

  elementDropped(event: CdkDragDrop<any>)
  {
    console.log('Event: ', event);
    if(event.previousContainer === event.container){
      console.log('Same container');
      return;
    }
    const book: Book = event.item.data;
    if( this.readingListBooks.find((readingListBook) => readingListBook.book.title === book.book.title)){
        console.log('Book already in reading list')
      return;
      }

    console.log('Element dropped')
    this.readingListBooks.push(book);
  }

}
