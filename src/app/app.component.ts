import { Component, AfterViewInit } from '@angular/core';
import { ParticlesAnimation } from './particles-animation';

import * as anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {

  // fireworks animation on background
  private _particlesAnimation: ParticlesAnimation;
  private _touchPointer: { x: number, y: number };

  ngAfterViewInit() {
    this._particlesAnimation = new ParticlesAnimation('.fireworks', {
      colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
      particlesNumber: 30,
      windowSize: {
        width: 1080,
        height: 1920,
      }
    });
  }

  onTouchBackground(ev): void {
    // if (ev.path && ev.path.length > 7) { return; }
    console.log('backgroud touched...', ev.path);

    // re-set touch pointer
    const coordX = Number(ev.clientX || ev.touches[0].clientX);
    const coordY = Number(ev.clientY || ev.touches[0].clientY);
    this._touchPointer = { x: coordX, y: coordY };

    // animate particules
    this._particlesAnimation.animate(coordX, coordY);
  }

}
