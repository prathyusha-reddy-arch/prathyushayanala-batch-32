import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
showText=false;
  loginInfo = {
    email: '',
    pwd: ''
  }
  isUserLoggedIn=true;
  constructor(private router: Router, private aService: AuthService,private snackBar:MatSnackBar) { }

  ngOnInit() { 
    console.log('aService', this.aService.isLoggedIn);
  }

    onLogin() {
      if (this.loginInfo.email === 'ypr@gmail.com' &&
        this.loginInfo.pwd === '12345') {
          console.log('user Authenticated');

         this.aService.isLoggedIn = true;
          this.router.navigate(['/sidebar']);
      } else {
        console.log('user NOT Authenticated');
       this.aService.isLoggedIn = false;
       this.showText=true;
      
    
  }
  }
}
