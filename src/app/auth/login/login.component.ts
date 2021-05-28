import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {LoginRequest} from '../../admin/models/login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: FormGroup;

  constructor(public location: Location, public auth: AuthService, private fb: FormBuilder) {
    this.data = fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  login() {
    const request: LoginRequest = this.data.value;
    this.auth.login(request)
      .pipe(first())
      .subscribe(async jwtToekn => {
        await this.auth.token.setToken(jwtToekn);
      }, (error: HttpErrorResponse) => this.auth.http.showHttpError(error));
  }

  ngOnInit(): void {
  }
}
