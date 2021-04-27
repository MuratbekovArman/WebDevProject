import { Injectable } from '@angular/core';
import {PRODUCTS, SUB_CATEGORIES} from './fake_db';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product, Sub_category} from './models';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  getSubcategories(id): Observable<Sub_category[]> {
      return this.http.get<Sub_category[]>(`${this.BASE_URL}/api/categories/${id}/subcategories`);
  }

  getSubcategory(id): Observable<Sub_category> {
    return this.http.get<Sub_category>(`${this.BASE_URL}/api/subcategories/${id}`);
  }
}
