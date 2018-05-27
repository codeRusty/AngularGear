import { Component } from '@angular/core';
import { BeamService, coreHTTP, AppriseService, GlobalRef, LoaderService } from './common';
// Create observer object
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x.msg),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 1;
  title = 'Angular Gear';
  constructor() {
  }

}
