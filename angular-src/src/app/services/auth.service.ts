import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  acesso:any;
  admin = false;
  cadastro = false;
  idEmpresa: any;

  constructor(
    private http:Http,
  ) { }


  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/register', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('users/profile', {headers: headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  isAdmin(){
    this.user = Cookie.get('1');
    if(this.user == "true"){
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

  loggedIn() {
    if (tokenNotExpired()){
      this.isAdmin();
      return tokenNotExpired();
    }
  }

  mostraNavbar(){
    return tokenNotExpired();
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user, jwt){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    this.idEmpresa = user.idEmpresa;
    if (this.user.acesso == "admin"){
      this.admin = true;
      Cookie.set('1', 'true');
    }
    if (this.user.acesso !== "admin"){
      this.admin = false;
      Cookie.set('1', 'false');
    }    
  }

  logout(){
    this.authToken = null;
    this.user = null;
    this.admin = null;
    this.cadastro = null;
    localStorage.clear();
    Cookie.deleteAll();
  }
}
