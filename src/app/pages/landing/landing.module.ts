import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { UsersComponent } from './users/users.component';
import { SelectComponent } from './select/select.component';
import { LoginButtonComponent } from './login-button/login-button.component';

@NgModule({
  declarations: [LoggedOutComponent, LoggedInComponent, UsersComponent, SelectComponent, LoginButtonComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
