import { Component, OnInit } from '@angular/core';
import {Category, Sub_category} from '../models';
import {ActivatedRoute, Router} from '@angular/router';
import {SubcategoryService} from '../subcategory.service';
import {Location} from '@angular/common';
import {CATEGORIES, SUB_CATEGORIES} from '../fake_db';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  sub_categories!: Sub_category[] | undefined;
  cat!: Category | undefined;
  ids: any;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private subcatService: SubcategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.getSubCategory();
    this.getName();
  }

  getSubCategory() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('category_id'));
      this.subcatService.getSubcategories(id).subscribe((subCat) => {
        this.sub_categories = subCat;
      });
    });
  }

  getName() {
    this.ids = this.router.url.split('/').slice(this.router.url.split('/').length-2,this.router.url.split('/').length);
    this.cat = CATEGORIES.find( (a) => {
      return a.id == this.ids[1];
    });
  }

  goBack() {
    this.location.back();
  }

}
