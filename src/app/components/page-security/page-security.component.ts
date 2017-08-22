import { Component, OnInit } from '@angular/core';

import { UserSearchComponent } from '../user-search/user-search.component';
import { User } from '../user/user';

import { UserPermissionsComponent } from '../user-permissions/user-permissions.component';

@Component({
  selector: 'app-page-security',
  templateUrl: './page-security.component.html',
  styleUrls: ['./page-security.component.css']
})
export class PageSecurityComponent implements OnInit {

  user: User;

  onSelectUser(user: User) {
    this.user = user;
  }
  constructor() { }

  ngOnInit() {
  }

}
