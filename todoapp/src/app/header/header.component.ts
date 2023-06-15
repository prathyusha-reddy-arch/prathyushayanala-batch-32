import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogin=false;
  constructor() { }

  ngOnInit() {
  }
loginText:string='Login';
  toggleLogin(){
     if(this.loginText==='Login'){
      this.loginText='Logout';
     }else{
      this.loginText='Login';
     }
  }

}
