import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../validation/must-match';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userAccountForm: FormGroup;
  // username: string=''; //minLength = 4
  // password: string=''; //minLength = 5
  // confirmPassword: string=''; //minLength = 5, equal to password
  // email: string=''; // proper syntax


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userAccountForm = this.formBuilder.group({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'confirmPassword': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ])
    },{
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.userAccountForm.controls; }

  register(){
    console.log('registration');
  }

}
