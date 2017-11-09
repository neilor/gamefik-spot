import { TestBed, inject } from '@angular/core/testing';

import { RaffleSessionService } from './raffle-session.service';

describe('RaffleSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaffleSessionService]
    });
  });

  it('should be created', inject([RaffleSessionService], (service: RaffleSessionService) => {
    expect(service).toBeTruthy();
  }));
});
