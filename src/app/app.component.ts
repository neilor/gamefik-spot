import { Component, AfterViewInit } from '@angular/core';
import { ParticlesAnimation } from './particles-animation';
import { RaffleSessionService } from './raffle-session.service';

import * as anime from 'animejs';

const LOCK_PASSWORD = '31991';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {

  // fireworks animation on background
  private _particlesAnimation: ParticlesAnimation;
  private _touchPointer: { x: number, y: number };

  constructor(
    public raffleSessionSvc: RaffleSessionService,
  ) { }

  ngAfterViewInit() {
    this._particlesAnimation = new ParticlesAnimation('.fireworks', {
      colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
      particlesNumber: 30,
      windowSize: {
        width: 720,
        height: 1280,
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

  lockRaffle(): void {
    this._toggleRaffleLocking();
  }

  unlockRaffle(): void {
    this._toggleRaffleLocking();
  }

  private _toggleRaffleLocking(): void {
    if (!this._isPasswordCorrect()) { return; }

    // set locked state
    this.raffleSessionSvc.toggleLockState();
  }

  private _isPasswordCorrect(): boolean {
    const promptPassword = prompt('Digite a senha de Bloqueio:', '');

    // alert wrong password
    if (promptPassword !== LOCK_PASSWORD) {
      alert('Senha incorreta!');
      return false;
    }

    return true;
  }

}
