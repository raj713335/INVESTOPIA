import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  userRole: string;
  userName: string;

  constructor(private router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.userName = sessionStorage.getItem('userName');
  }

  ngOnInit(): void {
  }


  logOut() {
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('RecommendedSavings');
    this.router.navigate(['/login']);

  }

}
