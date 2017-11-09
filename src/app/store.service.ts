import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Reward, TopReward, DEFAULT_REWARD, TOP_REWARDS } from './reward';


@Injectable()
export class StoreService {

  private _lastSession: number;
  private _lastReward: Reward;

  constructor(
    private _storageSvc: LocalStorageService,
  ) { }

  getNewReward(): Reward {
    // get next session number
    const session = this._getNextSessionNumber();

    // select appropriate reward for this session
    const topReward = TOP_REWARDS.find(r => r.selectedSessions.includes(session));

    return topReward || DEFAULT_REWARD;
  }

  private _getNextSessionNumber(): number {
    // get last session number
    const last: number = this._getLastSessionNumber();

    // generate and save next session number
    const next: number = last + 1;
    this._saveAsLastSessionNumber(next);

    return next;
  }

  private _saveAsLastSessionNumber(n: number): void {
    this._storageSvc.set('last_session', n);
    this._lastSession = n;
  }

  private _getLastSessionNumber(): number {
    if (this._lastSession) { return this._lastSession; }

    return this._storageSvc.get<number>('last_session') || 0;
  }

}
