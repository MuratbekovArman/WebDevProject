import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Sale} from './models';
import {HttpClient} from '@angular/common/http';
import {SALES} from './fake_db';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  BASE_URL = '';

  constructor(private http: HttpClient) { }

  // getting with http
  // getSales(): Observable<Sale[]>{
  //   return this.http.get<Sale[]>(`${this.BASE_URL}/api/companies/`);
  // }

  // getting from fakeDB
  getSales(): Sale[]{
    return SALES;
  }
}
