import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin: boolean;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: '#495693',
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: 7,
        },
        line_linked:{
          color: '#9785d2',
          width: 1.5,
        }
      },
      interactivity: {
        events:{onhover: {
          mode: 'repulse',
        }
      }
    }
    };
  }


  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    )

  }

}
