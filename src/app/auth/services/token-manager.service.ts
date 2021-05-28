import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {JwtToken} from '../../admin/models/jwt-token.model';

@Injectable({providedIn: 'root'})
export class TokenManagerService {

  private readonly key = 'springToken';

  constructor(public router: Router) {
  }

  async setToken(token: JwtToken) {
    localStorage.setItem(this.key, JSON.stringify(token));
    await this.router.navigate(['/', 'public']); // should be landing page
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.key)) as JwtToken;
  }

  removeToken() {
    localStorage.removeItem(this.key);
  }
}
