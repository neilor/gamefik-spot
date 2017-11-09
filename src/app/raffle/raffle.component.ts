import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaffleSessionService, RaffleSessionStates } from './../raffle-session.service';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styles: [],
})
export class RaffleComponent implements OnInit {

  public sessionStates = RaffleSessionStates;

  constructor(
    private _router: Router,
    public sessionSvc: RaffleSessionService,
  ) { }

  ngOnInit() {
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
