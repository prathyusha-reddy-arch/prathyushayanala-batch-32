import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice/auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogin=false;
  login!: LoginComponent;
  loginText:string='Login';
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {

  }


  toggleLogin(){
     if(this.authService.isLoggedIn == true){
      this.router.navigate(['/profile']);
      this.loginText='Logout';
      this.authService.isLoggedIn =false;
      console.log("togglelogin"+this.authService.isLoggedIn);
     }else{
      this.loginText='Login';
     }
  }
  

}



