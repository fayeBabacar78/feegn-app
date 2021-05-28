import {Component, OnInit} from '@angular/core';
import {User} from '../../admin/models/user.model';
import {AuthService} from '../services/auth.service';
import {NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private auth: AuthService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  register(data: NgForm) {
    if (this.user.password === this.user.passwordConfirmation) {
      this.user.roles = [];
      this.auth.register(this.user).pipe(first()).subscribe(
        () => this.auth.token.router.navigateByUrl('/auth/login'),
        error => this.auth.http.showHttpError(error)
      );
    } else {
      this.auth.http.toaster('warning', `password don't match`);
    }
  }

}
