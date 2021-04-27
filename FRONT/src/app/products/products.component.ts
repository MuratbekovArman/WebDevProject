import { Component, OnInit } from '@angular/core';
import {Product, Sub_category} from '../models';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Location} from '@angular/common';
import {PRODUCTS, SUB_CATEGORIES} from '../fake_db';
import {SubcategoryService} from '../subcategory.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[] ;
  cat!: Sub_category ;
  ids: any;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private productService: ProductService,
              private subcatService: SubcategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getName();
  }

  getProducts() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('subcategory_id'));
      this.productService.getProducts(id).subscribe((products) => {
        this.products = products;
      });
    });
  }
  getName() {
    this.ids = this.router.url.split('/').slice(this.router.url.split('/').length - 2, this.router.url.split('/').length);
    this.subcatService.getSubcategory(this.ids[1]).subscribe((data) => {
      this.cat = data;
    });
  }


  goBack() {
    this.location.back();
  }
}
