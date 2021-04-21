import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLogged:boolean;
  @Output() isShown = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }


  logout(){
    this.isShown.emit(false);
  }

}
