import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Auth_token, Product} from './models';
import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class SearchService {
	BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getResults(request): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/search/${request}`);
  }
}
