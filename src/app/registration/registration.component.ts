import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../validation/must-match';
import { AuthenticationService } from '../service/security/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { Router } from '@angular/router';

export class User{
  constructor(public username:string, public password: string, public email: string){}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  passwordSize = 5;
  errorMessage=false;


  constructor(private formBuilder: FormBuilder, private authentication: AuthenticationService, 
    public matDialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'username': new FormControl('', [
        Validators.required,
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(this.passwordSize)
      ]),
      'confirmPassword': new FormControl('', [
        Validators.required,
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}")
      ])
    },{
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  register(){

    if(this.registerForm.invalid){
      return;
    }
    
    this.authentication.createAccount(new User(this.f.username.value, this.f.password.value, this.f.email.value)).subscribe(
        data => {
          const dialogRef = this.matDialog.open(ResultDialogComponent, {
            panelClass: 'registration-result-dialog',
            data: this.f.email.value
          });
          dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['login']);
          });
        },
        error =>{
          this.errorMessage=true;
          this.f.password.setValue('');
          this.f.confirmPassword.setValue(''); 
        }
    );

  }

  closeErrorMessage(){
    this.errorMessage=false;
  }

}
