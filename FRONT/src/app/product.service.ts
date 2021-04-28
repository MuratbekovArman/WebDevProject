import { Injectable } from '@angular/core';
import {PRODUCTS} from './fake_db';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product, Sale} from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  // getProducts(id: number) {
  //   const products = PRODUCTS.filter((x) => x.sub_category === id);
  //   return of(products);
  // }

  getProducts(id): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/subcategories/${id}/products`);
  }

  getALlProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products`);
  }

  addProduct(product: Product): Observable<Product> {
    // @ts-ignore
    return this.http.post(`${this.BASE_URL}/products`, product);
  }
}
