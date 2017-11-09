import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const CARDS_LIST = [1, 2, 3, 4, 5, 6];

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styles: [],
})
export class RaffleComponent implements OnInit {

  // temporary states that will migrated to service
  public cardList = CARDS_LIST;
  public cardSelected = false;
  public scratched = false;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  startScratch() {
    this.cardSelected = true;
  }

  finishScratch() {
    this.scratched = true;
  }

}
