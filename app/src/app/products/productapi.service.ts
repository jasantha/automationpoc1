import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {product} from '../products/product'
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
export class ProductapiService {

  constructor(private http: HttpClient) { }

  private servUrl = "http://localhost:3000/products"

 getProducts(){
  return this.http.get<product>(this.servUrl, httpOptions).pipe(
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

  addProduct(product: product,callback) {
    console.log(product);
    
    return this.http.post<product>(this.servUrl, JSON.stringify(product), httpOptions).subscribe(
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
