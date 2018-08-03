import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
    selector: 'notify-message',
    templateUrl: 'notify-message.component.html',
    styleUrls: ['notify-message.component.css']
})
export class NotifyMessageComponent implements OnInit {
    private _message: string;


    @Input('color')
    color: boolean;

    @Input('show')
    show: boolean;

    @Input('message')
    message: string;
    // set message(message: string) {
    //     this._message = (message && message.trim()) || '<no name set>';
    // }
    constructor() {
       // setTimeout(() => { this.show = false }, 3000);
    }

    ngOnInit() {
        console.log('hi' + this.message);

    }
    closethis() {
        this.show = false;
    }
    ngOnDestroy() {

    }
}