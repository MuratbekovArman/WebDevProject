import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../models';
import {CATEGORIES} from '../fake_db';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();

  }

  getCategories(): void{
    /*this.categoryService.getCategories().subscribe(((categories) =>{
      this.categories = categories;
    }))*/
    this.categories = CATEGORIES;
  }

}
