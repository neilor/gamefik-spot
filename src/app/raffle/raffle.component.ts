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
  ContainClass;


  // Animations
  ContainAnimation;
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
  CardSelection;
  OverlayAnimation;

  public sessionStates = RaffleSessionStates;

  constructor(
    private _router: Router,
    public sessionSvc: RaffleSessionService,
  ) { }

  ngOnInit() {

    this.InstructionAnimation = anime({

      targets: '.instructionMsg',
      opacity: 1,
      duration: 1000,

    });

    this.CardAnimationFloating1 = anime({
      loop: true,
      easing: 'easeInOutQuad',
      targets: '.card1',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,

    });

    this.CardAnimationFloating2 = anime({
      loop:true,
      easing: 'easeInOutQuad',
      targets: '.card2',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,

    });

    this.CardAnimationFloating3 = anime({
      loop:true,
      easing: 'easeInOutQuad',
      targets: '.card3',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,

    });

    this.CardAnimationFloating4 = anime({
      loop:true,
      easing: 'easeInOutQuad',
      targets: '.card4',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,
    });

    this.CardAnimationFloating5 = anime({
      loop:true,
      easing: 'easeInOutQuad',
      targets: '.card5',
      translateY: -10,
      translateX: 10,
      duration: 1800,
      direction: 'alternate',
      autoplay: false,

    });



    this.CardAnimationIntro1 = anime({
      autoplay: false,
      targets: '.card1',
      width: this.CardWidth,
      height: this.CardHeight,
      rotate: '1turn',
      elasticity: 0,
      offset: 0,
      complete: () => {
        setTimeout(()=>{this.CardAnimationFloating1.play()},Math.random() * 1800);
      }
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
      complete: () => {
        setTimeout(()=>{this.CardAnimationFloating3.play()},Math.random() * 1800);
      }
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
      complete: () => {
        setTimeout(()=>{this.CardAnimationFloating5.play()},Math.random() * 1800);
      }});

    this.CardAnimationIntro4 = anime({
      autoplay: false,
      targets: '.card4',
      width: this.CardWidth,
      height: this.CardHeight,
      rotate: '1turn',
      offset: 0,
      elasticity: 0,
      delay: 600,
      complete: () => {
        setTimeout(()=>{this.CardAnimationFloating4.play()},Math.random() * 1800);
      }});

    this.CardAnimationIntro5 = anime({
      autoplay: false,
      targets: '.card2',
      width: this.CardWidth,
      height: this.CardHeight,
      rotate: '1turn',
      offset: 0,
      delay: 800,
      elasticity: 0,
      complete: () => {
        setTimeout(()=>{this.CardAnimationFloating2.play()},Math.random() * 1800);
      }
    });

    setTimeout(()=>this.introCarta(),500);

  }

  introCarta(){

    this.CardAnimationIntro1.play();
    this.CardAnimationIntro2.play();
    this.CardAnimationIntro3.play();
    this.CardAnimationIntro4.play();
    this.CardAnimationIntro5.play();

  }


  selectCard(cardClass:string){

    if(cardClass=='.card1'){
      this.ContainClass = '.contain1';
    }
    else if(cardClass=='.card2'){
      this.ContainClass = '.contain2';
    }
    else if(cardClass=='.card3'){
      this.ContainClass = '.contain3';
    }
    else if(cardClass=='.card4'){
      this.ContainClass = '.contain4';
    }
    else if(cardClass=='.card5'){
      this.ContainClass = '.contain5';
    }

    this.ContainAnimation = anime({
      targets: this.ContainClass,
      zIndex: {
        value: 5,
        round: true
      },
    })

    this.CardSelection = anime({
      targets: cardClass,
      rotateY: '150deg',
      scale: 3,
      duration: 3000,
      zIndex: {
        value: 5,
        round: true
      },
      complete: () => {
        if(cardClass=='.card1'){
          this.CardAnimationFloating1.pause();
        }
        else if(cardClass=='.card2'){
          this.CardAnimationFloating2.pause();
        }
        else if(cardClass=='.card3'){
          this.CardAnimationFloating3.pause();
        }
        else if(cardClass=='.card4'){
          this.CardAnimationFloating4.pause();
        }
        else if(cardClass=='.card5'){
          this.CardAnimationFloating5.pause();
        }
      }
    });

    this.OverlayAnimation = anime({
      targets: '.overlay',
      backgroundColor: '#1b1429',
      opacity: 0.5,
      zIndex: {
        value: 3,
        round: true
      },
      duration: 1500,
    });



  }

  startScratch() {
    this.sessionSvc.selectCard();
  }

  finishScratch() {
    this.sessionSvc.finishScratch();
  }

  finishRaffle() {
    this.sessionSvc.finishSession();
  }

}
