import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from './auth/services/auth.service';
import {User} from './admin/models/user.model';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private spinner: NgxSpinnerService, private auth: AuthService) {
    this.router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      } else if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    }).then(r => r);

    if (auth.token.getToken()?.accessToken) {
      this.auth.user().pipe(first()).subscribe(
        usr => this.auth.currentUser = usr,
        error => this.auth.http.showHttpError(error)
      );
    }
  }
}
