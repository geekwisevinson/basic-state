import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public selectedUser = new BehaviorSubject<any>({});
  public users = [
    {name: 'larry'},
    {name: 'moe'},
    {name: 'curly'},
    {name: 'shemp'},
  ];
  constructor() { }
  onSelectUser(user) {
    this.selectedUser.next(user);
  }
}
