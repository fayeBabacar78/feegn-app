import {Injectable} from '@angular/core';
import {AbstractHttpService} from '../models/http.model';
import {User} from '../models/user.model';

@Injectable({providedIn: 'root'})
export class UsersService {

  users: Array<User>;

  constructor(public http: AbstractHttpService) {
  }

  index() {
    return this.http.get<User[]>('users/');
  }

  destroy(user: User) {
    return this.http.delete<User>(`users/${user.id}`);
  }

  show(user: User) {
    return this.http.get<User>(`users/${user.id}`);
  }
  create(user: User) {
    return this.http.post<User>('auth/register', user);
  }

  update(user: User) {
    return this.http.put<User>(`users/`, user);
  }
}
