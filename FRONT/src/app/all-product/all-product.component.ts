import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {ProductService} from '../product.service';
import {Location} from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products!: Product[];
  newProduct!: string;
  constructor(private productService: ProductService,
              private location: Location,
              private router : Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts(){
    this.productService.getALlProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProduct(){
    const product = {
      name: this.newProduct
    };

    this.productService.addProduct(product as Product).subscribe((prod) => {
      console.log(prod);
    });
    window.location.reload();
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('deleted');
    });
    location.reload();

  }
}
