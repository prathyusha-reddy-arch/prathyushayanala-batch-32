import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  fname:string='';
  lname:string='';
  phone: number=0;
  email:string='';
  pwd:string='';
  cpwd:string='';
  username:string='';
  
  

  ngOnInit() {
  }
  submit(){
    console.log(this.fname+" "+this.lname+" "+this.phone+" "+this.phone+" "+this.username+" "+this.email+" "+this.pwd+" "+this.cpwd)
  }

}
