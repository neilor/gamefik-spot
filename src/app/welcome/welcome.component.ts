import { Component, OnInit } from '@angular/core';
import { RaffleSessionService } from '../raffle-session.service';
import * as anime from 'animejs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [],
})
export class WelcomeComponent implements OnInit {

  //Animations
  buttonAwayAnimation;
  msgAnimationUp;
  msgAnimationAway;

  constructor(
    private _raffleSessionSvc: RaffleSessionService,
  ) { }

  ngOnInit() {

    this.buttonAwayAnimation = anime({
      autoplay: false,
      targets: '.buttonNext',
      opacity: 0,
      duration: 500,
    });

    this.msgAnimationAway = anime({
      autoplay: false,
      targets: '.welcomeMsg',
      opacity: 0,
      duration: 1000,
      complete: () => {
        this._raffleSessionSvc.startSession();
      }
    });

    this.msgAnimationUp = anime({
      autoplay: false,
      targets: '.welcomeMsg',
      translateY: -500,
      duration: 1200,
      easing: 'linear',
      complete: () => {
        this.msgAnimationAway.play();
      }
    });
  }

  goToRaffle() {
    this.msgAnimationUp.play();
    this.buttonAwayAnimation.play();
  }

}
