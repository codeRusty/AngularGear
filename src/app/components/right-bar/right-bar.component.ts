import { Component } from '@angular/core';
import { BeamService, coreHTTP, AppriseService, LoaderService } from '../../angular-gear';

@Component({
    selector: 'right-bar',
    templateUrl: './right-bar.component.html',
    styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent {
    username: string = "No new value";
    counter: number = 1;
    title = 'Angular Gear';
    constructor(public _http: coreHTTP, public _beam: BeamService, private _apprise: AppriseService, private loader: LoaderService) {
        this.registerEvents();
    }

    onClick() {
        this.request();
    }

    request() {
        if (this.counter == 1)
            this._http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(res => console.log(res.json()));
        this.counter++;

        this._apprise.notitfyInfo('Comming Soon!!');

        setTimeout(this.loader.hide(), 10000);
    }
    registerEvents() {
        this._beam.on().subscribe({
            next: x => this.username = x.msg,
            error: err => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification'),
        });
    }

}
