import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css'],
  animations: [
    trigger('banner-animation', [
      state('create', style({
        opacity: 1
      })),
      transition('void => create', [
        style({
          opacity: 0,
          transform: 'translate(-30px, 0)'
        }),
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('panel-animation', [
      state('create', style({
        opacity: 1
      })),
      transition('void => create', [
        style({
          opacity: 0,
          transform: 'translate(30px, 0)'
        }),
        animate('1.5s 0s ease-in-out', keyframes([
          style({ offset: 0.15, opacity: 1, transform: 'translateX(0)' }),
          style({ offset: 0.86, opacity: 1, transform: 'translateX(0)' }),

          style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.9, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)' })
        ]))
      ])
    ])
  ]
})
export class AccessComponent implements OnInit {

  public stateCreate: string = 'create'
  public loadRegister: boolean = true

  constructor() { }

  public navigateTo(event: boolean): void {
    this.loadRegister = event
  }

  ngOnInit() {
  }

}
