
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableBooksComponent implements OnInit {

  @Input() availableBooksList: Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
