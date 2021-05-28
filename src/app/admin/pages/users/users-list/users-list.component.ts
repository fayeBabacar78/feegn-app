import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Array<User>;

  constructor(private userService: UsersService) {
    this.users = new Array<User>();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.index().pipe().subscribe(
      users => this.users = users,
      error => this.userService.http.showHttpError(error));
  }

  showUser(user: any) {

  }

  deleteUser(user: User) {
    this.userService.destroy(user).pipe().subscribe(
      usr => this.users = this.users.filter(us => usr.id !== us.id),
      error => this.userService.http.showHttpError(error)
    );
  }
}
