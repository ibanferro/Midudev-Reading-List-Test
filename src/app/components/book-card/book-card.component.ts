import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() availableBook: Book | null = null;

  @Output() removeFromAvailableBooksEE: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFromAvailableBooks()
  {
    if(this.availableBook === null) return;
    this.removeFromAvailableBooksEE.emit(this.availableBook);
  }

}
