import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Account} from '../../../interface/account';

@Component({
  selector: 'gw-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  public account = null;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.account.subscribe( account => {
      this.account = account;
    });
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
