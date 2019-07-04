import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'gw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public bgColor = '#999';
  public selectedUser = null;
  constructor(public usersService: UsersService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.usersService.selectedUser.subscribe( user => {
      this.selectedUser = user;
      this.randomBackground();
    });
    this.route.paramMap.subscribe( route => {
      console.log('route', route.get('id'));
      if (route.get('id')) {
        this.usersService.onSelectUserByUsername(route.get('id'));
      }
    });
  }

  onSelectUser(user) {
    this.usersService.onSelectUser(user);
  }

  public randomBackground() {
    const colors = ['red', 'blue', 'white', 'green', 'yellow', 'purple', 'orange'];
    this.bgColor = colors[Math.floor(Math.random() * colors.length)];
  }

}
