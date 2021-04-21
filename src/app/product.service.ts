import { Injectable } from '@angular/core';
import {PRODUCTS, SUB_CATEGORIES} from './fake_db';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(id: number) {
    const products = PRODUCTS.filter((x) => x.sub_category === id);
    return of(products);
  }
}
