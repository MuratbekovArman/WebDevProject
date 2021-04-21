import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Auth_token, Category} from './models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = '';

  constructor(private http: HttpClient) { }
  login(username, password): Observable<Auth_token>{
    return this.http.post<Auth_token>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/api/companies/`);
  }
}
