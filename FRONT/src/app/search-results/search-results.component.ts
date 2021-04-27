import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS, SUB_CATEGORIES } from '../fake_db';
import { Product, Sub_category } from '../models';

import {SearchService} from '../search.service';
import {SubcategoryService} from '../subcategory.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  results : Product[] = [];
  request : string = "";
  category_id:number;

  constructor(private router : Router,
              private searchService : SearchService,
              private subcatService: SubcategoryService) { }

  ngOnInit(): void {
    this.getResults();


  }

  goToProduct(index:string){
    const result: Product = this.results[index];
    this.router.navigate(['/categories/' + this.getCategoryId(result.sub_category) + '/' + result.sub_category + '/' + result.id]);
  }

  getCategoryId(id):string{
    for(let result of this.results){
      console.log(result)
    }
    console.log(this.results);
    if(id == undefined)return "0";
    let sub_category: Sub_category;
    this.subcatService.getSubcategories(id).subscribe((subCat) => {
        sub_category = subCat.find((sC)=>{
          return id == sC.id;
        })
      })
    const category_id : number = sub_category.category_id ;
    return category_id.toString();
  }

  getResults(){
    this.request = this.router.url.split('/')[this.router.url.split('/').length-1];
    this.searchService.getResults(this.request).subscribe((products) => {
      this.results = products;
      });
  }



}
