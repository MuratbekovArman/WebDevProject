import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS, SUB_CATEGORIES } from '../fake_db';
import { Product } from '../models';

import {SearchService} from '../search.service';

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
              private searchService : SearchService) { }

  ngOnInit(): void {
    this.getResults();


  }

  getResults(){
    this.request = this.router.url.split('/')[this.router.url.split('/').length-1];
    this.searchService.getResults(this.request).subscribe((products) => {
      this.results = products;
      });
  }



}
