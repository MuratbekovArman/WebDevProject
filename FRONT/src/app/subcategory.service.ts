import { Injectable } from '@angular/core';
import {PRODUCTS, SUB_CATEGORIES} from './fake_db';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {


  constructor() { }

  getSubcategories(id: number) {
    const subCat = SUB_CATEGORIES.filter((x) => x.category_id === id);
    return of(subCat);
  }
}
