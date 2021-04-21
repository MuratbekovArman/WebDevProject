import { Injectable } from '@angular/core';
import {PRODUCTS} from './fake_db';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor() { }

  getProduct(id: number){
    const product = PRODUCTS.find((x) => x.id = id);
    return of(product);
  }
}
