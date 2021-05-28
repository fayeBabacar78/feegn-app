import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UsersService} from '../../../services/users.service';
import {NgForm} from '@angular/forms';
import {Agence} from '../../../models/agence.model';
import {AgenceService} from '../../../services/agence.service';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

export class Role {
  key: string;
  value: string;
}

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  user: User;
  agences: Observable<Agence[]>;
  roles: Role[] = [
    {
      key: 'Modérateur',
      value: 'mod'
    }, {
      key: 'Administrateur',
      value: 'admin'
    }
  ];

  constructor(private userService: UsersService, private agenceSservice: AgenceService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.agences = this.agenceSservice.index();
  }

  addUser(data: NgForm) {
    this.userService.create(this.user).pipe(first()).subscribe(
      userData => {
        console.log(userData);
        data.reset();
      },
      error => this.userService.http.showHttpError(error)
    );
  }

}
