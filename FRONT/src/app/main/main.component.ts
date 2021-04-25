import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../fake_db';
import {Category} from '../models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isReadMore = true
  showText(){
    this.isReadMore=!this.isReadMore
  }


  ngOnInit(): void {
  }

}
