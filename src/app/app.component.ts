import { Component } from '@angular/core';
import { trigger, transition, useAnimation, query, style, group, animate, animateChild, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('home => details', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':leave', style({ zIndex: 100 })),
        query(':enter', style({ transform: 'translateY(100%)' })),

        group([
          query(':leave', group([
            animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' })), // y: '-100%'
            animateChild()
          ])),
          query(':enter', group([
            animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0%)' })),
            animateChild()
          ]))
        ])
      ]),
      transition('details => home', [
        query(':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(100%)' }),
          query('contributor', [
            style({ opacity: 0, transform: 'scale(0)' })
          ])
        ]),

        query(':leave', [
          query('.image', [
            stagger(50, [
              animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(-50px)' }))
            ])
          ]),
          animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateX(-100%)' }))
        ]),

        group([
          query(':enter', [
            animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
          ]),
          query(':enter contributor', [
            stagger(200, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {

  getRouteAnimation(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
