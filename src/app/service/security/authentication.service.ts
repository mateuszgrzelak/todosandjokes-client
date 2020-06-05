import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/registration/registration.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  createAccount(user: User){
    console.log(user.username +' '+user.password + ' '+ user.email);
    return this.http.post<User>(`${API_URL}/registration/`, user);
  }
}
