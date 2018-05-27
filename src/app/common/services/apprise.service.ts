import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { GlobalRef } from './client-side.globals.service';

@Injectable()
export class AppriseService {

    constructor(private _global: GlobalRef) {

    }

    notitfySuccess(msg: string) {
        this._global.nativeExtra.showNotification(2, 'top', 'center', msg);
    }
    notitfyError(msg: string) {
        this._global.nativeExtra.showNotification(4, 'top', 'center', msg);
    }
    notitfyWarning(msg: string) {
        this._global.nativeExtra.showNotification(3, 'top', 'center', msg);
    }
    notitfyInfo(msg: string) {
        this._global.nativeExtra.showNotification(1, 'top', 'center', msg);
    }


}
