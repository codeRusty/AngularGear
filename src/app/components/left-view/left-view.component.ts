import { Component } from '@angular/core';
import { BeamService, coreHTTP, AppriseService, LoaderService } from '../../angular-gear';
// Create observer object
const myObserver = {
    next: x => console.log('Observer got a next value: ' + x.msg),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

@Component({
    selector: 'left-view',
    templateUrl: './left-view.component.html',
    styleUrls: ['./left-view.component.css']
})
export class LeftViewComponent {
    username: string = "";
    counter: number = 1;
    title = 'Angular Gear';

    constructor(public _http: coreHTTP, public _beam: BeamService, private _apprise: AppriseService, private loader: LoaderService) {
        this.registerEvents();
    }
    registerEvents() {
        this._beam.on().subscribe({
            next: x => this.username = x.msg,
            error: err => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification'),
        });
    }

    emitBeam() {
        this._beam.broadcast({ msg: this.username, type: "ok" });
    }

    showWarning() {
        this._apprise.notitfyWarning("This is Warning for your now!!");
    }
    showInfo() {
        this._apprise.notitfyInfo("This is Info for your now!!");
    }
    showError() {
        this._apprise.notitfyError("This is Error for your now!!");
    }
    showSuccess() {
        this._apprise.notitfySuccess("This is Success for your now!!");
    }

    getHttp() {
        this._http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(res => { setTimeout(this.loader.hide(), 2000) });

    }

    //Show Loader
    showLoader() {
        this.loader.show();
        this.getHttp();
    }

    hideLoader() {

    }

    //Show Loader
}
