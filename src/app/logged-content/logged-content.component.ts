import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { loggedContent, slideInAnimation } from '../animations';

@Component({
  selector: 'app-logged-content',
  templateUrl: './logged-content.component.html',
  styleUrls: ['./logged-content.component.css'],
  animations:[
    loggedContent
  ]
})
export class LoggedContentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
