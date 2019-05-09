import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Produit } from './shared/IProduit';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProduitServiceService {

  constructor(private http: HttpClient) { }

  getAllProduit() : Observable<Produit[]> {
    return this.http.get<Produit[]>('http://127.0.0.1:8080/commandes').pipe(
       catchError(this.handleError)
      );
    }
  
    getProduit(id: number) : Observable<Produit> {
      return this.http.get<Produit>('http://127.0.0.1:8080/Produit/'+id).pipe(
        catchError(this.handleError)
      );
    }
  
  saveProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>('http://127.0.0.1:8080/Produit/save', produit).pipe(
      catchError(this.handleError)
    );
  }
  
  updateProduit(produit: Produit): Observable<{}> {
    return this.http.put('http://127.0.0.1:8080/Produit/update', produit).pipe(
      catchError(this.handleError)
    );
  }
  
  deleteProduit(id: number): Observable<{}> {
    return this.http.delete('http://127.0.0.1:8080/Produit/delete/'+id).pipe(
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

