import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService } from './store.service';
import { Reward } from './reward';

export enum RaffleSessionStates {
  NOT_STARTED       = 'not_started',
  WAITING_SELECTION = 'waiting_selection',
  WAITING_SCRATCH   = 'waiting_scratch',
  FINISHED          = 'finished',
}

// temporary mocked card list
const CARDS_LIST = [1, 2, 3, 4, 5, 6];

@Injectable()
export class RaffleSessionService {

  private _cardList = CARDS_LIST;
  private _cardSelected = false;
  private _scratched = false;

  private _state = RaffleSessionStates.NOT_STARTED;

  private _reward: Reward;

  get cardList(): number[] {
    return this._cardList;
  }

  get cardSelected(): boolean {
    return this._cardSelected;
  }

  get scratched(): boolean {
    return this._scratched;
  }

  get state(): RaffleSessionStates {
    return this._state;
  }

  get reward(): Reward {
    return this._reward;
  }

  constructor(
    private _router: Router,
    private _store: StoreService,
  ) { }

  startSession() {
    this._resetSessionData();
    this._state = RaffleSessionStates.WAITING_SELECTION;
    this._reward = this._store.getNewReward();
    this._router.navigate(['/raffle']);
  }

  selectCard() {
    this._cardSelected = true;
    this._state = RaffleSessionStates.WAITING_SCRATCH;
  }

  finishScratch() {
    this._scratched = true;
    this._state = RaffleSessionStates.FINISHED;
  }

  finishSession() {
    this._router.navigate(['/']);
    this._state = RaffleSessionStates.NOT_STARTED;
  }

  private _resetSessionData() {
    this._cardSelected = this._scratched = false;
    this._reward = null;
  }

}
