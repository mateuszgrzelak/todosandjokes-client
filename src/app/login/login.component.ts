import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/security/authentication.service';

export class User{
  constructor(public username:string, public password:string){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidUsername=false;
  invalidPassword=false;
  loginFailed=false;

  constructor(private router: Router,
    private authentication: AuthenticationService) { }

  ngOnInit(): void {}

  handleBasicAuthLogin() {
    if(this.username===''){
      this.invalidUsername = true;
    }else{
      this.invalidUsername = false;
    }
    if(this.password===''){
      this.invalidPassword = true;
    }else{
      this.invalidPassword = false;
    }
    if(this.invalidUsername || this.invalidPassword){
      return;
    }
    this.authentication.identificate(new User(this.username, this.password)).subscribe(
      data => {
        this.authentication.setJWT(data.message);
        this.router.navigate(['todos']);
      },
      error => {
        console.log(error);
        this.loginFailed=true;
      }
    )

  }

  closeErrorMessage(){
    this.loginFailed=false;
  }

}
