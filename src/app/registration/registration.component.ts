import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../validation/must-match';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  passwordSize = 5;


  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.registerForm.controls.username.value);
    console.log(this.registerForm.controls.password.value);
    
    if(this.registerForm.invalid){
      return;
    }

    console.log('registration');

  }

}
