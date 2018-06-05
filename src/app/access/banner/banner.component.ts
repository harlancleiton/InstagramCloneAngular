import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animation, animate, keyframes } from '@angular/animations';
import { ImageBanner } from '../../shared/image-banner.model'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  /*
  1° parametro: nome
  2° parametro: estados (states)
    state: 1° parametro: nome
    state: 2° parametro: estilo (css)
  */
  animations: [
    trigger('banner', [
      state('hidden',
        style({
          opacity: 0
        })),
      state('visible',
        style({
          opacity: 1
        })),
      transition('hidden <=> visible', animate('2s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  //public stateBanner: string = 'visible'
  public imageBanner: Array<ImageBanner> = [
    { state: 'visible', url: '/assets/banner/img_1.png' },
    { state: 'hidden', url: '/assets/banner/img_2.png' },
    { state: 'hidden', url: '/assets/banner/img_3.png' },
    { state: 'hidden', url: '/assets/banner/img_4.png' },
    { state: 'hidden', url: '/assets/banner/img_5.png' }
  ]

  constructor() { }

  public toggleState(): void {
    let index: number = this.imageBanner.findIndex(aux => aux.state === 'visible')
    this.imageBanner[index].state = 'hidden'
    this.imageBanner[(index === this.imageBanner.length - 1) ? 0 : index + 1].state = 'visible'
    setTimeout(() => this.toggleState(), 2500)
  }

  ngOnInit() {
    setTimeout(() => this.toggleState(), 2500)
  }

}
