import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Account} from '../interface/account';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string  = null;

  public account = new BehaviorSubject<Account>(null);
  constructor() {  }
  public onLogin(account: Account) {
    this.account.next(account);
  }
}
