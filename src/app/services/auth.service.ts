import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Account} from '../interface/account';
import {NavigateService} from './navigate.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string  = null;

  public account = new BehaviorSubject<Account>(null);
  constructor(private navService: NavigateService) {  }
  public onLogin(account: Account) {
    this.account.next(account);
    if (account) {
      this.navService.goto('dashboard');
    } else {
      this.navService.goto('');
    }
  }
}
