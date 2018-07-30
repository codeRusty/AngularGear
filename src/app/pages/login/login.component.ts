import { Component, OnInit, NgZone } from '@angular/core';
import { GoogleAuthService } from '../../common/lib/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GoogleAuthService]
})
export class LoginComponent implements OnInit {
  imageURL: string;
  email: string;
  name: string;
  token: string;
  constructor(private auth: GoogleAuthService, private zone: NgZone) { }

  ngOnInit() {
  }

  /**
 * Calling Google Authentication service
 */
  googleAuthenticate() {
    this.auth.authenticateUser((result) => {
      //Using Angular2 Zone dependency to manage the scope of variables
      this.zone.run(() => {
        this.getData();
      });
    });
  }

  /**
  * Getting data from browser's local storage
  */
  getData() {
    this.token = localStorage.getItem('token');
    this.imageURL = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }

  /**
  * Logout user and calls function to clear the localstorage
  */
  logout() {
    let scopeReference = this;
    this.auth.userLogout(function () {
      scopeReference.clearLocalStorage();
    });
  }
  /**
 * Clearing Localstorage of browser
 */
  clearLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }

}
