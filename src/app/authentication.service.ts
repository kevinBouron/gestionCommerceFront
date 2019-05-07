import { User } from './user';


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  private jwtToken;
  roles = Array<any>();
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post("http://localhost:8080/account/disconnect" + '/login', user, { observe: 'response' })
  }
  saveToken(jwt) {
    localStorage.setItem('token', jwt);
    
  }
  loadToken(jwtToken) {
    this.jwtToken = jwtToken;
    this.saveToken(this.jwtToken);
  }
  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }
 
  disconnect(){
    console.log('Receiving Data from the BackOffice');
    const headers = new HttpHeaders();
    return this.http.get("http://localhost:8080/account/disconnect",{ headers: new HttpHeaders({ 'Authorization': localStorage.getItem('token') }) });
  }
 
  initResetPassword(login) {
    const headers = new HttpHeaders();
    return this.http.get('http://localhost:8080/api/account/reset_password/init/' + login);
  }
  finishResetPassword(newUser) {
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:8080/api/account/reset_password/finish', newUser);
  }
  getConnectedUser(){
    return this.http.get<Array<User>>("http://localhost:8080/usersConnected",{ headers: new HttpHeaders({ 'Authorization': localStorage.getItem('token') }) });
  
  }


}