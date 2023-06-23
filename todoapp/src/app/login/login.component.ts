import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }

  email:string = '';
  password:string = '';

 flag:any;


 onLogin()
  {
    if (this.email === 'ypr@gmail.com' &&
      this.password === '12345') {
        console.log('user Authenticatesd');
        this.authService.isLoggedIn = true;
        this.router.navigate(['/profile']);
        this.flag=true;
    } else {
      console.log('user NOT Authenticatesd');
      this.authService.isLoggedIn = false;
      this.flag=false;
     alert('InValid details!!!')
    }
  }

  Cancel(){
    console.log("Cancelled!!")
  }


}
