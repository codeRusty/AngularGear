import { BeamService, coreHTTP, AppriseService, LoaderService } from './angular-gear';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

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


}
