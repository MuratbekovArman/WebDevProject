import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductUpdateService {
	BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client : HttpClient) { }

  updateProduct(product: Product):Observable<Product>{
  	
    return this.client.put<Product>(this.BASE_URL +'/api/products/'+product.id.toString() + "/", product)
  }
}
