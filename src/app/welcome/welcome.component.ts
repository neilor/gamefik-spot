import { Component, OnInit } from '@angular/core';
import { RaffleSessionService } from '../raffle-session.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [],
})
export class WelcomeComponent implements OnInit {

  constructor(
    private _raffleSessionSvc: RaffleSessionService,
  ) { }

  ngOnInit() {
  }

  goToRaffle() {
    this._raffleSessionSvc.startSession();
  }

}
