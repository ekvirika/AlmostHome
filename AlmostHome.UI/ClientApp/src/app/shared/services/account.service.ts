import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Account } from '../models/Account.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  list : Account[];


  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { 
    console.log(this.baseUrl);
  }

  postAccount(formData : Account): Observable<Account> {
    return this.httpClient.post<Account>(`${this.baseUrl}api/Accounts`, formData)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.baseUrl}api/Accounts`)
    // return this.httpClient.get<Account[]>(this.baseUrl + 'api/Accounts')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putAccount(id : number, account : Account): Observable<Account> {
    return this.httpClient.put<Account>(`${this.baseUrl}api/Accounts` + id, account)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteAccount(id : number){
    return this.httpClient.delete<Account>(`${this.baseUrl}api/Accounts` + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      console.log(errorMessage);
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(errorMessage);
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
