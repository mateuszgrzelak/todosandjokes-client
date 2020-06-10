import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from 'src/app/registration/registration.component';
import { API_URL, JWT_NAME } from 'src/app/app.constants';
import { User } from 'src/app/login/login.component';
import { Response } from 'src/app/app.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private cookieService: CookieService, private jwtHelper: JwtHelperService) { }

  createAccount(userAccount: UserAccount){
    return this.http.post<UserAccount>(`${API_URL}/registration`, userAccount);
  }

  identificate(user: User){
    return this.http.post<Response>(`${API_URL}/login`, user);
  }

  setJWT(value: string){
    localStorage.setItem(JWT_NAME, value);
  }

  getJWTValue():string{
    return localStorage.getItem(JWT_NAME);
  }

  isAuthenticated(): boolean{
    let token = this.getJWTValue();
    if(token===null){
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout(){
    localStorage.removeItem(JWT_NAME);
  }

}
