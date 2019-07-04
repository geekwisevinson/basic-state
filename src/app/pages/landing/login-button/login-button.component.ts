import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Account} from '../../../interface/account';
import {Subscription} from 'rxjs';
import {takeLast, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'gw-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit, OnDestroy {
  public account = null;
  public subscriptions: Subscription[] = [];
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.subscriptions.push(this.authService.account.subscribe( account => {
      this.account = account;
      console.log('account', account);
    }));
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    this.subscriptions.forEach( sub => sub.unsubscribe())
  }

  public onLogin() {
    if (this.account) {
      this.authService.onLogin(null);
    } else {
      const account: Account = {
       username: 'Vince',
        balance: 10000,
        lastLogin: null,
        status: 'vip',
      };
      this.authService.onLogin(account);
    }
  }

}
