import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IFacture } from '../shared/IFacture';

@Injectable()
export class FactureServiceService {


    constructor(private http: HttpClient) { }

  getAllFactures() : Observable<IFacture[]> {
    return this.http.get<IFacture[]>('http://127.0.0.1:8080/factures').pipe(
      catchError(this.handleError)
    );
  }

  getFacture(numero: number) : Observable<IFacture> {
    return this.http.get<IFacture>('http://127.0.0.1:8080/facture/'+numero).pipe(
      catchError(this.handleError)
    );
  }

  saveFacture(facture: IFacture): Observable<IFacture> {
    return this.http.post<IFacture>('http://127.0.0.1:8080/facture/save', facture).pipe(
      catchError(this.handleError)
    );
  }

  editFacture(numero: number, facture: IFacture): Observable<IFacture> {
    return this.http.post<IFacture>('http://127.0.0.1:8080/facture/edit/'+numero, facture).pipe(
      catchError(this.handleError)
    );
  }
  deleteFacture(numero: number): Observable<IFacture> {
    return this.http.delete<IFacture>('http://127.0.0.1:8080/facture/delete/'+numero).pipe(
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