import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scratch',
  templateUrl: './scratch.component.html',
  styles: [],
})
export class ScratchComponent implements OnInit {

  public scratched = false;

  constructor() { }

  ngOnInit() {
  }

  finishScratch() {
    this.scratched = true;
  }

}
