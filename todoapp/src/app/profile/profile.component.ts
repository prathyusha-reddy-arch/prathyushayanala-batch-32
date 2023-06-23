import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  flag=false;
  fname:string='';
  lname:string='';
  phone: number=0;
  dob:Date=new Date();
  email:string='';
  hobby:string='';

 
  
  constructor() { }

  ngOnInit() {
  }
  displayProfile(){
       this.flag=true;
  }

}
