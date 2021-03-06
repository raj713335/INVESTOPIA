import { Injectable } from '@angular/core';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


import { IUser } from '../../longevity-interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor(private http: HttpClient) { }


  validateCredentials(obj: IUser): Observable<number> {

    return this.http.post<number>('https://localhost:44314/api/Investopia/LoginValidation', obj).pipe(catchError(this.errorHandler));
  }


  signup(obj: IUser): Observable<number> {

    return this.http.post<number>('https://localhost:44314/api/Investopia/RegisterNewUser', obj).pipe(catchError(this.errorHandler));
  }

 

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
