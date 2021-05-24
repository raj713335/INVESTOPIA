import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  userRole: string;
  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;

  constructor() {
    this.userRole = sessionStorage.getItem('userRole');
    this.userName = sessionStorage.getItem('userName');
    console.log(this.userName);
    if (this.userName != null ) {
      this.userLayout = true;
    }
    else {
      this.commonLayout = true;
    }}

  ngOnInit(): void {
  }

}
