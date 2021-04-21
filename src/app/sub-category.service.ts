import { Injectable } from '@angular/core';
import {SUB_CATEGORIES} from './fake_db';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor() { }

  // getSubcategories() {
  //   return of(SUB_CATEGORIES);
  // }

  getSubcategories(id: number) {
    const subCat = SUB_CATEGORIES.filter((x) => x.category_id === id);
    return of(subCat);
  }
}
