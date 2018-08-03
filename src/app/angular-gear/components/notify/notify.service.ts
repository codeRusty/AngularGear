import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotifyState } from './notify';
@Injectable()

export class NotifyService {
    count = 0;
    private loaderSubject = new Subject<NotifyState>();
    loaderState = this.loaderSubject.asObservable();

    constructor() { }

    Error() {
        this.loaderSubject.next(<NotifyState>{ show: true, message: "Error", color: 'red', count: this.count });
        this.count++;
    }
    Success() {
        this.loaderSubject.next(<NotifyState>{ show: true, message: "Success", color: 'green', count: this.count });
        this.count++;
    }
    Warning() {
        this.loaderSubject.next(<NotifyState>{ show: true, message: "Warning", color: 'orange', count: this.count });
        this.count++;
    }
    Info() {
        this.loaderSubject.next(<NotifyState>{ show: true, message: "Info", color: 'skyblue', count: this.count });
        this.count++;
    }
}
