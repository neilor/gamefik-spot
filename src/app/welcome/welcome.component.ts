import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [],
  // encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  goToRaffle() {
    this._router.navigate(['/raffle']);
  }

}
