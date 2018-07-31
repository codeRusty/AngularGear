import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BrowserWindowService } from './core/browser-window.service';

@Injectable()
export class AppriseService {

    constructor(private _global: BrowserWindowService) {

    }

    notitfySuccess(msg: string, valign: string = "top", halign: string = "right") {
        this._global.nativeExtra.showNotification(2, valign, halign, msg);
    }
    notitfyError(msg: string, valign: string = "top", halign: string = "right") {
        this._global.nativeExtra.showNotification(4, valign, halign, msg);
    }
    notitfyWarning(msg: string, valign: string = "top", halign: string = "right") {
        this._global.nativeExtra.showNotification(3, valign, halign, msg);
    }
    notitfyInfo(msg: string, valign: string = "top", halign: string = "right") {
        this._global.nativeExtra.showNotification(1, valign, halign, msg);
    }


}
