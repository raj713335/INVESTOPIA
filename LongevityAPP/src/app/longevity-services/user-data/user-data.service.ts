import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


import { IUserInformation } from '../../longevity-interfaces/IUserInformation';
import { ILifeExpectancy } from '../../longevity-interfaces/ILifeExpectancy';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }


  AddInformtion(obj: IUserInformation): Observable<number> {

    return this.http.post<number>('https://localhost:44314/api/Investopia/AddUserInformation', obj).pipe(catchError(this.errorHandler));
  }

  LeftExpectancy(obj: ILifeExpectancy): Observable<number> {
    return this.http.post<number>('http://127.0.0.1:8000/predict', obj).pipe(catchError(this.errorHandler));
  }

  GetUserFinance(Email: string): Observable<IUserInformation[]> {
    return this.http.get<IUserInformation[]>('https://localhost:44314/api/Investopia/GetUserFinance?EmailId='+Email).pipe(catchError(this.errorHandler));
  }

  GetUserData(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44314/api/Investopia/GetAllUserInformations').pipe(catchError(this.errorHandler));
  }



  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
