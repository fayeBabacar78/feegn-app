import {Injectable} from '@angular/core';
import {AbstractHttpService} from '../../admin/models/http.model';
import {User} from '../../admin/models/user.model';
import {LoginRequest} from '../../admin/models/login-request.model';
import {JwtToken} from '../../admin/models/jwt-token.model';
import {TokenManagerService} from './token-manager.service';
import {first} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class AuthService {

  currentUser: User;

  constructor(public http: AbstractHttpService, public token: TokenManagerService) {
  }

  register(user: User) {
    return this.http.post<User>('auth/register', user);
  }

  login(request: LoginRequest) {
    return this.http.post<JwtToken>('auth/login', request);
  }

  logout() {
    this.token.removeToken();
  }

  user() {
    return this.http.get<User>('users/current');
  }

  get hasLoggedIn() {
    return this.token.getToken() !== null;
  }

  /* Recupere l'ensemble des permissions de l'utilisateur
  * et verifie si la liste contient une permission admin */
  get hasAdminAbility() {
    const token = this.token.getToken();
    return token?.authorities.includes('ROLE_ADMIN');
  }
  get hasModAbility() {
    const token = this.token.getToken();
    return token?.authorities.includes('ROLE_MODERATOR');
  }
}
