import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[] | undefined;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProducts() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('subcategory_id'));
      this.productService.getProducts(id).subscribe((products) => {
        this.products = products;
        console.log(products);
      });
    });
  }
}
