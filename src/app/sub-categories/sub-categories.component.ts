import { Component, OnInit } from '@angular/core';
import {Sub_category} from '../models';
import {ActivatedRoute} from '@angular/router';
import {SubCategoryService} from '../sub-category.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
sub_categories!: Sub_category[] | undefined;

  constructor(private route: ActivatedRoute,
              private subcatService: SubCategoryService) { }

  ngOnInit(): void {
    this.getSubCategory();
  }

  getSubCategory() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('category_id'));
      this.subcatService.getSubcategories(id).subscribe((subCat) => {
        this.sub_categories = subCat;
      });
    });
  }

}
