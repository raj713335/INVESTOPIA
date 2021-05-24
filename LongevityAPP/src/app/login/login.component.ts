import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IUser } from '../longevity-interfaces/IUser';
import { IUserInformation } from '../longevity-interfaces/IUserInformation';

import { UserValidationService } from '../longevity-services/user-validation/user-validation.service';
import { UserDataService } from '../longevity-services/user-data/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status: number;
  errMsg: string;
  msg: string;
  credentials: IUser;
  FinaceData: IUserInformation;

  constructor(private login: UserValidationService, private FinanceService: UserDataService, private router: Router) { }

  

  ngOnInit(): void {
  }


  submitLoginForm(form: NgForm) {

    console.log("hello");

    this.credentials = { FIRSTNAME: null, LASTNAME: null, EMAILID: form.value.email, PASSWORD: form.value.password };

    console.log(this.credentials);

    this.login.validateCredentials(this.credentials).subscribe(
      responseLoginStatus => {
        this.status = responseLoginStatus;
        if (this.status == 1) {
          sessionStorage.setItem('userName', form.value.email);
          sessionStorage.setItem('userRole', 'User');
          
         
          this.FinanceService.GetUserFinance(form.value.email).subscribe(
              responseProductData => {

                this.FinaceData = responseProductData[0];

                console.log(this.FinaceData);
                sessionStorage.setItem('RecommendedSavings', String(this.FinaceData["yearlySavingsRequired"]));
                console.log("OK");


              },
              responseProductError => {
                this.errMsg = responseProductError;
                sessionStorage.setItem('RecommendedSavings', String(0));
                console.log(this.errMsg);
              }
            );
          
          this.router.navigate(['/']);
        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
          alert("invalid");
        }
      },
      () => console.log("SubmitLoginForm method executed successfully")
    );
  }

}
