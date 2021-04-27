import { Component, OnInit } from '@angular/core';
import {Category, Sub_category} from '../models';
import {ActivatedRoute, Router} from '@angular/router';
import {SubcategoryService} from '../subcategory.service';
import {Location} from '@angular/common';
import {CATEGORIES, SUB_CATEGORIES} from '../fake_db';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  sub_categories!: Sub_category[] ;
  cat!: Category ;
  ids: any;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private subcatService: SubcategoryService,
              private router: Router,
              private catService: CategoryService) { }

  ngOnInit(): void {
    this.getSubCategory();
    this.getName();
  }

  getSubCategory() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('category_id'));
      this.subcatService.getSubcategories(id).subscribe((subCat) => {
        this.sub_categories = subCat;
        console.log(subCat);
      });
    });
  }

  getName() {
    this.ids = this.router.url.split('/').slice(this.router.url.split('/').length-2,this.router.url.split('/').length);
    this.catService.getCategory(this.ids[1]).subscribe((data) => {
      this.cat = data;
      console.log(data);
    });
  }

  goBack() {
    this.location.back();
  }

}
