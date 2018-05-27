import { Injectable } from '@angular/core';

declare var extra: any;

function _window(): any {
    // return the global native browser window object
    return window;
}
function _demo(): any {
    // return the global native browser window object
    return extra;
}


@Injectable()
export class GlobalRef {
    get nativeWindow(): any {
        return _window();
    }
    get nativeExtra(): any {
        return _demo();
    }
}