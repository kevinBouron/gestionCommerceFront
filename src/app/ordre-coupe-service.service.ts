import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Commande } from './shared/ICommande';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class OrdreCoupeServiceService {

  constructor(private http: HttpClient) { }

getAllCommande() : Observable<Commande[]> {
  return this.http.get<Commande[]>('http://127.0.0.1:8080/commandes').pipe(
     catchError(this.handleError)
    );
  }

  getCommande(id: number) : Observable<Commande> {
    return this.http.get<Commande>('http://127.0.0.1:8080/commande/'+id).pipe(
      catchError(this.handleError)
    );
  }

saveCommande(commande: Commande): Observable<Commande> {
  return this.http.post<Commande>('http://127.0.0.1:8080/Commande/save', commande).pipe(
    catchError(this.handleError)
  );
}

updateCommande(commande: Commande): Observable<{}> {
  return this.http.put('http://127.0.0.1:8080/Commande/update', commande).pipe(
    catchError(this.handleError)
  );
}

deleteCommande(id: number): Observable<{}> {
  return this.http.delete('http://127.0.0.1:8080/Commande/delete/'+id).pipe(
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