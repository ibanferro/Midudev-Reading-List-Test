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
  }

  onDragStart($event: Event)
  {
    console.log('Drag Start', $event);

    if(this.book === null) return;

  }

}
