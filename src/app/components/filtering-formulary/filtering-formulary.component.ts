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
  genreOptionList: string[] = ['All'];

  filteringFormularyChangeListeningSubscription: Subscription;

  @Output() filteringDataEE: EventEmitter<FilteringData> = new EventEmitter<FilteringData>();

  constructor() {
    this.formGroup = new FormGroup({
      pages: new FormControl({}),
      genre: new FormControl({}),
    });

    this.filteringFormularyChangeListeningSubscription = this.formGroup.valueChanges.subscribe(
      (filteringFormularyData: FilteringData) => {
        console.log('**************');
        console.log('filteringFormularyData: ', filteringFormularyData);
        console.log('form pages: ', this.formGroup.value.pages);
        console.log('form genre: ', this.formGroup.value.genre);
        console.log('**************');

        this.onSubmitFilteringFormulary();
      }
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
    let genreOptionList: string[] = ['All'];
    this.bookList.forEach((book: Book) => {
      if (!genreOptionList.includes(book.book.genre)) {
        genreOptionList.push(book.book.genre);
      }
    });
    return genreOptionList;
  }

  onSubmitFilteringFormulary(): void {
    console.log('**************');
    console.log('Filtering Formulary');
    console.log('Pages: ', this.formGroup.value.pages);
    console.log('Genre: ', this.formGroup.value.genre);
    console.log('**************');
    const filteringData: FilteringData = {
      pages: this.formGroup.value.pages,
      genre: this.formGroup.value.genre,
    };
    this.filteringDataEE.emit(filteringData);
  }

}
