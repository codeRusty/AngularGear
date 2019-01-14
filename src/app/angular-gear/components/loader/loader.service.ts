import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from './loader';
@Injectable()

export class LoaderService {

    private loaderSubject = new Subject<LoaderState>();
    loaderState = this.loaderSubject.asObservable();

    constructor() { }

    show(): any {
        this.loaderSubject.next(<LoaderState>{ show: true });
    }
    hide(): any {
        this.loaderSubject.next(<LoaderState>{ show: false });
    }
}
