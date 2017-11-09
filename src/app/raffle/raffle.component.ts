import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const CARDS_LIST = [1, 2, 3, 4, 5, 6];

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styles: [],
})
export class RaffleComponent implements OnInit {

  public cardList = CARDS_LIST;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  startScratch() {
    this._router.navigate(['/scratch']);
  }

}
