import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products!: Product[];
  newProduct!: string;
  constructor(private productService: ProductService) { }

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

  }
}
