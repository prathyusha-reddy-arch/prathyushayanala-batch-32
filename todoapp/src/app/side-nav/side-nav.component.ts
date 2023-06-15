import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

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
