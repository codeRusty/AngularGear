import { Injectable, Inject } from '@angular/core';
import { AppGlobals } from '../core/app.globals';
import { Http } from '@angular/http';
import { GearConfig } from '../../angular-gear.module';

declare const gapi: any;

@Injectable({ providedIn: 'root' })
export class GoogleAuthService {
    constructor(@Inject('GearConfig') private config: GearConfig, private http: Http) { }

    /**
     * Calling Google login API and fetching account details.
     * @param callback Callback to function
     */
    public authenticateUser(callback) {
        let auth2: any;
        let result: any;

        gapi.load('auth2', function () {
            auth2 = gapi.auth2.init({
                client_id: this.config.GOOGLE_AUTH_KEY,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            let element = document.getElementById('google-login-button');
            auth2.attachClickHandler(element, {},
                function (googleUser) {
                    let profile = googleUser.getBasicProfile();
                    result = {
                        token: googleUser.getAuthResponse().id_token,
                        name: profile.getName(),
                        image: profile.getImageUrl(),
                        email: profile.getEmail(),
                    };
                    callback(result);
                }, function (error) {
                    alert(JSON.stringify(error, undefined, 2));
                });
        });
    }

    /**
     * Logout user from Google
     * @param callback Callback to function
     */
    userLogout(callback) {
        let homeUrl = "http://localhost:4200";
        let logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + homeUrl;
        document.location.href = logoutUrl;
        callback();
    }
}