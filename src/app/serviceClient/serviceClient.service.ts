import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IClient } from '../ajouter-client/client';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Injectable()
export class ClientServiceService{

    constructor(private http:HttpClient){
 
    }

    getAllClients() : Observable<IClient[]>{
        return this.http.get<IClient[]>('http://127.0.0.1:8080/Client/getall').
        pipe(catchError(this.handleError));
    }
    
    

    getClient(codeClient:number) : Observable<IClient>{
        return this.http.get<IClient>('http://127.0.0.1:8080/Client/get/'+codeClient).
        pipe(catchError(this.handleError));
    }

    saveClient(client : IClient) : Observable<IClient>{
        return this.http.post<IClient>('http://127.0.0.1:8080/Client/save', client).pipe(catchError(this.handleError));
 }
    
    deleteClient(codeClient:number) : Observable<{}>{
        return this.http.delete('http://127.0.0.1:8080/Client/delete'+codeClient).pipe(catchError(this.handleError));
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