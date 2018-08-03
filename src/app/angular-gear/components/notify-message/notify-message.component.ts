import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '../../../../../node_modules/@angular/animations';
@Component({
    selector: 'notify-message',
    templateUrl: 'notify-message.component.html',
    styleUrls: ['notify-message.component.css'],
    animations: [
        trigger('flyInOut', [
            state('inactive', style({ transform: 'translateX(0) scale(0)' })),
            state('active', style({ transform: 'translateX(0) scale(1)' })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
            transition('void => inactive', [
                style({ transform: 'translateX(-100%) scale(1)' }),
                animate(100)
            ]),
            transition('inactive => void', [
                animate(100, style({ transform: 'translateX(100%) scale(1)' }))
            ]),
            transition('void => active', [
                style({ transform: 'translateX(0) scale(0)' }),
                animate(200)
            ]),
            transition('active => void', [
                animate(200, style({ transform: 'translateX(0) scale(0)' }))
            ])
        ])
    ]
})
export class NotifyMessageComponent implements OnInit {
    currentState: string;
    private _message: string;

    @Output()
    closeEvent: EventEmitter<string>;
    
    
    @Input('state')
    state: string;

    @Input('notifyClass')
    notifyClass: string;

    @Input('show')
    show: boolean;

    @Input('message')
    message: string;

    @Input('svg')
    svg: string;


    // set message(message: string) {
    //     this._message = (message && message.trim()) || '<no name set>';
    // }
    constructor() {
        // setTimeout(() => { this.show = false }, 3000);
        //this.state = 'active';
        console.log(this.svg);
    }

    ngOnInit() {
        console.log('hi' + this.message);

    }
    closethis() {
        this.state = 'inactive';
       // this.closeEvent.emit('close');
        //this.show = false;
    }
    ngOnDestroy() {

    }
}