import { Component, OnInit } from '@angular/core';
import {SaleService} from '../sale.service';
import {Sale} from '../models';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.sales = this.getSales();
  }

  // getting from fakeDB
  getSales(){
  return this.saleService.getSales();
  }

  // getting with http
  // getSales(){
  //   this.saleService.getSales().subscribe((date) => {
  //     this.sales = date;
  //   });
  // }
}
