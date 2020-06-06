import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from 'src/app/registration/registration.component';
import { API_URL } from 'src/app/app.constants';
import { User } from 'src/app/login/login.component';
import { Response } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  createAccount(userAccount: UserAccount){
    return this.http.post<UserAccount>(`${API_URL}/registration/`, userAccount);
  }

  identificate(user: User){
    return this.http.post<Response>(`${API_URL}/login/`, user)
  }
}
