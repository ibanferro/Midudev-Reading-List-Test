import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseApiUrl: string = 'http://localhost:3000';

  constructor( private httpClient: HttpClient ) { }

  getBookList() : Observable<any>
  {
    return this.httpClient.get<any>(`${this.baseApiUrl}/library`);
  }



}
