import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LoginPage => AboutPage', [
      style({ position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', [
        style({ position: 'absolute'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('AboutPage => LoginPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ left: '-100%'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('LoginPage => RegistrationPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          'z-index': 10,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(-100%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(100%)'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0%)'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('RegistrationPage => LoginPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          'z-index': 10,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(100%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(-100%)'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0%)'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    
  ]);