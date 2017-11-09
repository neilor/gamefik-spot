import { TestBed, async, inject } from '@angular/core/testing';

import { RaffleSessionGuard } from './raffle-session.guard';

describe('RaffleSessionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaffleSessionGuard]
    });
  });

  it('should ...', inject([RaffleSessionGuard], (guard: RaffleSessionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
