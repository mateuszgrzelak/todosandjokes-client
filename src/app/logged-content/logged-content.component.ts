import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { loggedContent, slideInAnimation } from '../animations';
import { AuthenticationService } from '../service/security/authentication.service';

@Component({
  selector: 'app-logged-content',
  templateUrl: './logged-content.component.html',
  styleUrls: ['./logged-content.component.css'],
  animations:[
    loggedContent
  ]
})
export class LoggedContentComponent implements OnInit {

  constructor(private router:Router, private authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  logout(){
    this.authentication.logout();
  }

}
