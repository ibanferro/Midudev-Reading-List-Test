import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Subscription } from 'rxjs';

export interface FilteringData {
  pages: number;
  genre: string;
}

@Component({
  selector: 'app-filtering-formulary',
  templateUrl: './filtering-formulary.component.html',
  styleUrls: ['./filtering-formulary.component.scss']
})


export class FilteringFormularyComponent implements OnInit, OnDestroy {

  @Input() bookList: Book[] = [];

  formGroup: FormGroup;

  maxPages: number = 0;
  genreOptionList: string[] = [];

  filteringFormularyChangeListeningSubscription: Subscription;

  @Output() filteringDataEE: EventEmitter<FilteringData> = new EventEmitter<FilteringData>();

  constructor() {
    this.formGroup = new FormGroup({
      pages: new FormControl({}),
      genre: new FormControl('All',{}),
    });

    this.filteringFormularyChangeListeningSubscription = this.formGroup.valueChanges.subscribe(
      (filteringFormularyData: FilteringData) => {
        this.filteringDataEE.emit(filteringFormularyData);      }
    );

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.maxPages = this.getMaxPages();
    this.genreOptionList = this.getGenreOptionList();
  }

  ngOnDestroy(): void {
    if( this.filteringFormularyChangeListeningSubscription)
    {this.filteringFormularyChangeListeningSubscription.unsubscribe();}
  }

  getMaxPages(): number {
    let maxPages: number = 0;
    this.bookList.forEach((book: Book) => {
      if (book.book.pages > maxPages) {
        maxPages = book.book.pages;
      }
    });
    return maxPages;
  }

  getGenreOptionList(): string[] {
    let genreOptionList: string[] = [];
    this.bookList.forEach((book: Book) => {
      if (!genreOptionList.includes(book.book.genre)) {
        genreOptionList.push(book.book.genre);
      }
    });
    return genreOptionList;
  }

}
