import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {NgForm} from '@angular/forms';
import {UsersService} from '../../../services/users.service';
import {AgenceService} from '../../../services/agence.service';
import {Observable} from 'rxjs';
import {Agence} from '../../../models/agence.model';
import {Role} from '../users-create/users-create.component';
import {first} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

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

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService, private agenceService: AgenceService) {
    this.user = new User();
    this.user.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.agences = this.agenceService.index();
    this.userService.show(this.user).pipe(first()).subscribe(
      user => this.user = user,
      error => this.userService.http.showHttpError(error));
  }

  update(data: NgForm) {
    delete this.user.roles;
    this.userService.update(this.user).pipe(first()).subscribe(
      () => this.userService.http.redirect('../users'),
      error => this.userService.http.showHttpError(error)
    );
  }
}
