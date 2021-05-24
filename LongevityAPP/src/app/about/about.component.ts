import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  userRole: string;
  userName: string;
  emailId: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;


  errMsg: string;
  constructor() { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
    this.emailId = this.userName;

    console.log(this.userName);
    if (this.userName != null) {
      this.userLayout = true;
    }
    else {
      this.commonLayout = true;
    }
  }

}
