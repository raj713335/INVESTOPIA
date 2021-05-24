import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  userRole: string;
  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;
  adminLayout: boolean = false;

  constructor() {
    this.userRole = sessionStorage.getItem('userRole');
    this.userName = sessionStorage.getItem('userName');
    console.log(this.userName);
    if (this.userName != null ) {
      this.userLayout = true;
    }
    else {
      if (this.userRole == "Admin") {
        this.adminLayout = true;
      }
      else {
        this.commonLayout = true;
      }
    }}

  ngOnInit(): void {
  }

}
