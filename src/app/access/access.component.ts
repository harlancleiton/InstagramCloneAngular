import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class AccessComponent implements OnInit {

  public stateCreate: string = 'create'

  constructor() { }

  ngOnInit() {
  }

}
