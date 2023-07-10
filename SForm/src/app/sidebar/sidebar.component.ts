import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isClicked=false;
  studentClicked=false;
   ngOnInit() {
  }
  clickSubmissions(){
    this.studentClicked=false;
    this.isClicked=!this.isClicked;
  }
  clickStudent(){
    this.isClicked=false;
    this.studentClicked=!this.studentClicked;
   }
}
