import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthRoutingModuleModule} from './auth-routing.module';
import {FlexModule} from '@angular/flex-layout';
import {LayoutComponent} from './layout/layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
    imports: [
        AuthRoutingModuleModule,
        FlexModule,
        CardModule,
        MatCardModule,
        MatButtonModule,
        InputNumberModule,
        InputTextModule,
        ButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
  exports: [],
  declarations: [LoginComponent, RegisterComponent, LayoutComponent],
  providers: [],
})
export class AuthModule {
}
