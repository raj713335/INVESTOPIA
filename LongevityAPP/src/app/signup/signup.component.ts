import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IUser } from '../longevity-interfaces/IUser';

import { UserValidationService } from '../longevity-services/user-validation/user-validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  siteKey: string;
  status: number;
  errMsg: string;
  msg: string;
  credentials: IUser;



  constructor(private reCaptchaV2Service: ReCaptchaV3Service, private login: UserValidationService, private router: Router) {

    this.siteKey = '6LeLcagaAAAAAMOw3ZyRkM53mvL7_93LHzSVIo6U';
    //this.reCaptchaV2Service.execute(this.siteKey, 'signup', (token) => {
    //  console.log('This is your token: ', token);
    //}, {
    //  useGlobalDomain: true // optional
    //});
  }

  ngOnInit(): void {


  }


  SignUp(form: NgForm) {

    console.log("hello");

    this.credentials = { FIRSTNAME: form.value.FirstName, LASTNAME: form.value.LastName, EMAILID: form.value.Email, PASSWORD: form.value.Password };

    console.log(this.credentials);

    this.login.signup(this.credentials).subscribe(
      responseLoginStatus => {
        this.status = responseLoginStatus;
        if (this.status == 1) {
          sessionStorage.setItem('userName', form.value.Email);
          sessionStorage.setItem('userRole', 'User');
          this.router.navigate(['/health']);
        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
          alert("invalid");
        }
      },
      () => console.log("SignUp Successfull")
    );
  }



}
