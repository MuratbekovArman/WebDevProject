import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductDetailService} from '../product-detail.service';
import {Location} from '@angular/common';
import { PRODUCTS } from '../fake_db';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product | undefined;
  ids:any;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private productDetService: ProductDetailService,
              private router: Router) { }

  ngOnInit(): void {
    //this.getProduct();
    this.ids = this.router.url.split('/').slice(this.router.url.split('/').length-2,this.router.url.split('/').length);
    console.log(this.ids);
    this.product = PRODUCTS.find( (a) =>{
      return a.id == this.ids[1];
    })


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
