import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators'
import { Reglement } from './shared/IReglement';

@Injectable()
export class ReglementService {
  

  constructor(private http: HttpClient) { 

  }

  getAllContacts() : Observable<Reglement[]> {
    return this.http.get<Reglement[]>('http://localhost:8080/reglement').pipe(
      catchError(this.handleError)
    );
  }

  deletePaiement(id: number): Observable<{}> {
    return this.http.delete('http://localhost:8080/reglement/delete/'+id).pipe(
      catchError(this.handleError)
    );
  }

  savePaiement(reglement: Reglement): Observable<Reglement> {
    return this.http.post<Reglement>('http://localhost:8080/reglement/save', reglement).pipe(
      catchError(this.handleError)
    );
  }




 

  private handleError(error: HttpErrorResponse) {
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
  
}
