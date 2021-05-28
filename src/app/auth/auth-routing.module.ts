import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LoggedInGuard} from './guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoggedInGuard],
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AuthRoutingModuleModule {
}
