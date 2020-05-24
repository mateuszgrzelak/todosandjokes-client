import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    slideInAnimation
  ]
})
export class AppComponent implements OnInit{
  title = 'todo';

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit(): void {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
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
          type: 'edge',
        },
        size: {
          value: 7,
        },
        line_linked: {
          color: '#9785d2',
          width: 1.5,
        }
      },
      interactivity: {
        events: {
          onhover: {
            mode: 'repulse',
          }
        }
      }
    };
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
