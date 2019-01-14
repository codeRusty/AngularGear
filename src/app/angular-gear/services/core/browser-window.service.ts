import { Injectable } from "@angular/core";

declare var WindowExtention: any;

function _window(): any {
  // return the global native browser window object
  return window;
}
function _demo(): any {
  // return the global native browser window object
  return WindowExtention;
}

@Injectable({ providedIn: "root" })
export class BrowserWindowService {
  get nativeWindow(): any {
    return _window();
  }
  get nativeExtra(): WindowExtention {
    return _demo();
  }
}
export interface WindowExtention {
  initGoogleMaps: void;
  showNotification(
    color: number,
    valign: string,
    halign: string,
    text: string
  ): void;
}
