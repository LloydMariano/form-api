import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Friends } from '../info/info';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  base_path = 'http://localhost:3000/info';

  constructor(private http: HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
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


 
  createItem(item): Observable<Friends> {
    return this.http
      .post<Friends>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  getItem(id): Observable<Friends> {
    return this.http
      .get<Friends>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  getList(): Observable<Friends> {
    return this.http
      .get<Friends>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}

