import { Injectable } from '@angular/core';
import {PRODUCTS} from './fake_db';
import {Observable, of} from 'rxjs';
import {Product, Sale} from './models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  // getProduct(id: number){
  //   const product = PRODUCTS.find((x) => x.id = id);
  //   return of(product);
  // }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}`);
  }
}
