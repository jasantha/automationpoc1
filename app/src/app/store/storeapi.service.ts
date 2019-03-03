import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {store} from '../store/store'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { callbackify } from 'util';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StoreapiService {

  constructor(private http: HttpClient) { }

  private servUrl = "http://localhost:3000/stores"

 getStores(){
  return this.http.get<store>(this.servUrl, httpOptions).pipe(
    catchError(this.handleError)
  );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  addStore(store: store,callback) {
    console.log(store);
    
    return this.http.post<store>(this.servUrl, JSON.stringify(store), httpOptions).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
                      callback(val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
}
}
