import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

export interface FilteringData {
  pages: number;
  genre: string;
}

@Component({
  selector: 'app-filtering-formulary',
  templateUrl: './filtering-formulary.component.html',
  styleUrls: ['./filtering-formulary.component.scss']
})


export class FilteringFormularyComponent implements OnInit {

  @Input() bookList: Book[] = [];

  formGroup: FormGroup;

  maxPages: number = 0;
  genreOptionList: string[] = ['All'];

  @Output() filteringDataEE: EventEmitter<FilteringData> = new EventEmitter<FilteringData>();

  constructor() {
    this.formGroup = new FormGroup({
      pages: new FormControl({}),
      genre: new FormControl({}),
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.maxPages = this.getMaxPages();
    this.genreOptionList = this.getGenreOptionList();
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
