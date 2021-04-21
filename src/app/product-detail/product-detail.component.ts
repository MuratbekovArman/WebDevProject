import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductDetailService} from '../product-detail.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product | undefined;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private productDetService: ProductDetailService) { }

  ngOnInit(): void {
    this.getProduct();
    console.log(this.product);
  }

  getProduct() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('product_id'));
      console.log(params);
      this.productDetService.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    });
  }
  goBack() {
    this.location.back();
  }
}
