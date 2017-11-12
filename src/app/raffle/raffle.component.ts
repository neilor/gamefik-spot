import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaffleSessionService, RaffleSessionStates } from './../raffle-session.service';
import * as anime from 'animejs';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.scss']
})
export class RaffleComponent implements OnInit {

  CardWidth = '120px';
  CardHeight = '200px';

  canClickOnCard: number[] = [];
  waitingFinish = false;
  rewarding = false;

  // Animations
  InstructionAnimation;
  CardAnimationIntro1;
  CardAnimationIntro2;
  CardAnimationIntro3;
  CardAnimationIntro4;
  CardAnimationIntro5;
  CardAnimationFloating1;
  CardAnimationFloating2;
  CardAnimationFloating3;
  CardAnimationFloating4;
  CardAnimationFloating5;
  OverlayAnimation;

  contentClasses = {};

  public sessionStates = RaffleSessionStates;

  constructor(
    private _router: Router,
    public sessionSvc: RaffleSessionService,
  ) { }

  ngOnInit() {
    this._animateInstructionMsg();
    this._initCardsAnimation();
    setTimeout(() => this._animateCards(), 500);
  }

  selectCard(cardNumber: number) {
    if (this.canClickOnCard.indexOf(cardNumber) === -1 || this.sessionSvc.locked) { return; }

    if (!this.sessionSvc.cardSelected) {
      this._animateCardSelection(cardNumber);
      this._startScratch();
    } else if (!this.waitingFinish) {
      this._scratchCard(cardNumber);
    } else {
      this.waitingFinish = false;
      this._finishRaffle();
    }
    // this._showOverlay();
  }

  private _scratchCard(cardNumber: number) {
    this._animateCardScratching(cardNumber);
  }

  private _finishRaffle() {
    this.sessionSvc.finishSession();
  }

  private _startScratch() {
    this.sessionSvc.selectCard();
  }

  private _finishScratch() {
    this.sessionSvc.finishScratch();
  }

  private _initCardsAnimation() {
    this.CardAnimationFloating1 = anime({
      loop: true,
      easing: 'easeInOutQuad',
      targets: '.card1',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,
      begin: () => this.canClickOnCard.push(1),

    });

    this.CardAnimationFloating2 = anime({
      loop: true,
      easing: 'easeInOutQuad',
      targets: '.card2',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,
      begin: () => this.canClickOnCard.push(2),

    });

    this.CardAnimationFloating3 = anime({
      loop: true,
      easing: 'easeInOutQuad',
      targets: '.card3',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,
      begin: () => this.canClickOnCard.push(3),

    });

    this.CardAnimationFloating4 = anime({
      loop: true,
      easing: 'easeInOutQuad',
      targets: '.card4',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,
      begin: () => this.canClickOnCard.push(4),
    });

    this.CardAnimationFloating5 = anime({
      loop: true,
      easing: 'easeInOutQuad',
      targets: '.card5',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,
      begin: () => this.canClickOnCard.push(5),
    });

    this.CardAnimationIntro1 = anime({
      autoplay: false,
      targets: '.card1',
      width: this.CardWidth,
      height: this.CardHeight,
      rotate: '1turn',
      elasticity: 0,
      offset: 0,
      complete: () =>
        setTimeout(() => this.CardAnimationFloating1.play(), Math.random() * 1800),
    });

    this.CardAnimationIntro2 = anime({
      autoplay: false,
      targets: '.card3',
      width: this.CardWidth,
      height: this.CardHeight,
      rotate: 360,
      delay: 200,
      elasticity: 0,
      offset: 0,
      complete: () =>
        setTimeout(() => this.CardAnimationFloating3.play(), Math.random() * 1800)
    });

    this.CardAnimationIntro3 = anime({
      autoplay: false,
      targets: '.card5',
      width: this.CardWidth,
      height: this.CardHeight,
      rotate: 360,
      offset: 0,
      elasticity: 0,
      delay: 400,
      complete: () =>
        setTimeout(() => this.CardAnimationFloating5.play(), Math.random() * 1800)
    });

    this.CardAnimationIntro4 = anime({
      autoplay: false,
      targets: '.card4',
      width: this.CardWidth,
      height: this.CardHeight,
      rotate: '1turn',
      offset: 0,
      elasticity: 0,
      delay: 600,
      complete: () =>
        setTimeout(() => this.CardAnimationFloating4.play(), Math.random() * 1800),
      });

    this.CardAnimationIntro5 = anime({
      autoplay: false,
      targets: '.card2',
      width: this.CardWidth,
      height: this.CardHeight,
      rotate: '1turn',
      offset: 0,
      delay: 800,
      elasticity: 0,
      complete: () =>
        setTimeout(() => this.CardAnimationFloating2.play(), Math.random() * 1800)
    });
  }

  private _animateCards() {
    this.CardAnimationIntro1.play();
    this.CardAnimationIntro2.play();
    this.CardAnimationIntro3.play();
    this.CardAnimationIntro4.play();
    this.CardAnimationIntro5.play();
  }

  private _animateInstructionMsg() {
    this.InstructionAnimation = anime({
      targets: '.instructionMsg',
      opacity: 1,
      duration: 1000,
    });
  }

  private _animateCardSelection(cardNumber: number) {
    const cardClass = `.card${cardNumber}`;
    const containClass = `.contain${cardNumber}`;

    anime({
      targets: containClass,
      zIndex: {
        value: 5,
        round: true
      },
    });

    anime({
      targets: containClass,
      top: '730px',
      right: '400px',
      duration: 3000,
    });

    anime({
      targets: [cardClass],
      rotateY: '180deg',
      easing: 'easeOutQuad',
      scale: 2.3,
      duration: 3000,
      zIndex: {
        value: 5,
        round: true
      },
      begin: () => this[`CardAnimationFloating${cardNumber}`].pause(),
    });
  }

  private _animateCardScratching(cardNumber) {
    if (this.rewarding) { return; }

    const contentClass = `.card${cardNumber} .back .content`;

    this.rewarding = true;

    if (this.sessionSvc.reward.isTop) { this.sessionSvc.toggleLockState(); }

    const showRewardImageAnimation = anime({
      targets: contentClass,
      opacity: 1,
      duration: 2000,
      complete: () => {
        this.waitingFinish = true;
      },
      autoplay: false,
    });

    anime({
      targets: contentClass,
      opacity: 0,
      duration: 2000,
      complete: () => {
        this.contentClasses[this.sessionSvc.reward.cssClass] = true;
        this.contentClasses['content-hidden'] = true;
        showRewardImageAnimation.play();
      },
    });
  }

  private _showOverlay() {
    this.OverlayAnimation = anime({
      targets: '.card-overlay',
      zIndex: {
        value: 3,
        round: true
      },
      duration: 1500,
    });
  }

  private _hideOverlay() {
    this.OverlayAnimation = anime({
      targets: '.card-overlay',
      zIndex: {
        value: -2,
        round: true
      },
      duration: 1500,
    });
  }

}
