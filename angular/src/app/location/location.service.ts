import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {location} from './location'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  private servUrl = "http://localhost:3000/productlocation"

  getProductLocation(){
  return this.http.get<location>(this.servUrl, httpOptions).pipe(
    catchError(this.handleError)
  );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  addProductLocation(location: location,callback) {
    console.log(location);
    
    return this.http.post<location>(this.servUrl, JSON.stringify(location), httpOptions).subscribe(
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

