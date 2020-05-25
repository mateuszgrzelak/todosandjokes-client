import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LoginPage => AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', [
        style({ position: 'absolute' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ left: '0%' }))
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
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ left: '0%' }))
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
        style({ transform: 'translateY(-100%)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(100%)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0%)' }))
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
        style({ transform: 'translateY(100%)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ transform: 'translateY(-100%)' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ transform: 'translateY(0%)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ContentPage <=> LoginPage', [
      style({}),
      query(':enter, :leave', [
        style({
          'z-index': 10,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query('router-outlet ~ *', [style({}), animate(1, style({}))], { optional: true }), // must be added to animate router-outlet
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);

export const loggedContent =
  trigger('routeAnimations', [
    transition('TodosPage <=> JokesPage', [
      style({}),
      query(':enter, :leave', [
        style({
          height: '100%',
          'z-index': 10,
          position: 'absolute',
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);