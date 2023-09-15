import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {

  @Input() book: Book | null = null;
  constructor() { }

  ngOnInit(): void {
    console.log('**************');
    console.log('Book', this.book?.book.cover);
    console.log('Book Cover: ', this.book?.book.cover);
    console.log('**************');

  }

}
