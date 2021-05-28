import {Component} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  constructor(private auth: AuthService) {
  }

  logout() {
    this.auth.logout();
    this.auth.token.router.navigateByUrl('/public');
  }
}
