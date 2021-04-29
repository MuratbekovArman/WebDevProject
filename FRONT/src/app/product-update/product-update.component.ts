import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models';
import {ProductDetailService} from '../product-detail.service';
import {ProductUpdateService} from '../product-update.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product_id: number;
  product !: Product | undefined;

  constructor(private router: Router,
  			  private productDetService: ProductDetailService,
  			  private productUpdService: ProductUpdateService) { }

  ngOnInit(): void {
  	this.product_id = this.getProductId();
  	this.getProduct(this.product_id);

  }

  getProductId():number{
  	return Number(this.router.url.split('/')[this.router.url.split('/').length-2]);
  }

  getProduct(id): void{
  	this.productDetService.getProduct(id).subscribe((data) => {
  		if(data){
  			this.product = data;
  		}
  		
      
    });
  }

  updateProduct(){
  	console.log(this.product);
  	
  	this.productUpdService.updateProduct(this.product).subscribe(next=> {
  		alert("Successfully")
  	}, err => {
  		alert("Failed")
  	});
  	this.router.navigate(['products'])
  }

}
