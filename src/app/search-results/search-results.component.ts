import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS, SUB_CATEGORIES } from '../fake_db';
import { Product } from '../models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  results : Product[] = [];
  request : string = "";
  category_id:number;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.getResults();


  }

  getCategoryId(id):string{
    const sub_category = SUB_CATEGORIES.find((sC)=>{
      return id == sC.id;
    })
    const category_id = sub_category.category_id;
    return category_id.toString();
  }

  getResults(){
    this.request = this.router.url.split('/')[this.router.url.split('/').length-1];
    this.results = PRODUCTS.filter((product) => {
      return product.name.includes(this.request) || product.description.includes(this.request)
    })
  }

}
