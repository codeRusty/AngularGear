import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '../../../../../node_modules/@angular/animations';
@Component({
    selector: 'notify-message',
    templateUrl: 'notify-message.component.html',
    styleUrls: ['notify-message.component.css'],
    animations: [
        trigger('flyInOut', [
            state('active', style({ opacity: 1, transform: 'translateX(0)' })),
            state('inactive', style({ opacity: 1, transform: 'translateX(110%)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'scale3d(.3, .3, .3)'
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 0.1s ease-out', style({
                    opacity: 0,
                    transform: 'translateX(110%)'
                }))
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
        setTimeout(() => {
            console.log(this.state);
            //this.state = 'inactive'

        }, 4999)
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