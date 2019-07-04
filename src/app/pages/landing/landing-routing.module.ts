import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedOutComponent} from './logged-out/logged-out.component';
import {LoggedInComponent} from './logged-in/logged-in.component';

const routes: Routes = [
  {path: '', component: LoggedOutComponent},
  {path: 'dashboard', component: LoggedInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
