import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Sale} from './models';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SaleService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  // getting with http
  getSales(): Observable<Sale[]>{
    return this.http.get<Sale[]>(`${this.BASE_URL}/api/sales`);
  }

  // getting from fakeDB
  // getSales(): Sale[]{
  //   return SALES;
  // }
}
