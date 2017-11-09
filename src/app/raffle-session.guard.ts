import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RaffleSessionService, RaffleSessionStates } from './raffle-session.service';

@Injectable()
export class RaffleSessionGuard implements CanActivate {
  constructor(
    private _sessionSvc: RaffleSessionService,
    private _router: Router,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const can = this._sessionSvc.state !== RaffleSessionStates.NOT_STARTED;

    // redirect if cannot access
    if (!can) { this._router.navigate(['/']); }

    return can;
  }
}
