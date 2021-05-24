import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { IUserInformation } from '../../longevity-interfaces/IUserInformation';
import { UserDataService } from '../../longevity-services/user-data/user-data.service';
import { IUser } from '../../longevity-interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class RegisterDoneService {

  constructor(private FinanceService: UserDataService,private _router: Router) { }

  errMsg: string;

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //check condition
    if (sessionStorage.getItem('userName') == null) {
      alert('You are not allowed to view this page');
      //return false to cancel the navigation
      this._router.navigate(['/login']);
      return false;
    }

    this.getfinance();

    return true;
  }


  getfinance() {
    this.FinanceService.GetUserFinance(sessionStorage.getItem('userName')).subscribe(
      responseProductData => {


        if (responseProductData.length==0) {

          this._router.navigate(['/health']);
          
        }
      },
      responseProductError => {
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      }
    );
  }

}
