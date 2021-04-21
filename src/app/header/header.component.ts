import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLogged:boolean;
  @Output() isShown = new EventEmitter();
  search_request: string = "";
  constructor(private router : Router) { }

  ngOnInit(): void {

  }
//routerLink="/search/{{search_request}}"
  search(){

    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/search/'+this.search_request]);
    });
  }


  logout(){
    this.isShown.emit(false);
  }

}
