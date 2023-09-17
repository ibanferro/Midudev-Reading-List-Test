import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {


  @Input() readingBookList: Book[] = [];
  @Output() removeFromReadingListEE: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFromReadingList(book: Book)
  {
    this.removeFromReadingListEE.emit(book);
  }

}
