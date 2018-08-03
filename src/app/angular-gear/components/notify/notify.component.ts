import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifyService } from './notify.service';
import { NotifyState } from './notify';
@Component({
    selector: 'angular-notify',
    templateUrl: 'notify.component.html',
    styleUrls: ['notify.component.css']
})
export class NotifyComponent implements OnInit {
    show = false;
    message = "";
    states: NotifyState[] = [];

    private subscription: Subscription;

    constructor(private loaderService: NotifyService) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: NotifyState) => {
                console.log(state);
                this.states.push(state);
                setTimeout(() => {
                    for (var i = 0; i <= this.states.length - 1; i++) {
                        if (this.states[i].count == state.count) {
                            this.states.splice(i, 1);
                        }
                    }
                }, 2000)
               // console.log(state.show)
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}