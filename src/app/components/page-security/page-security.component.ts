import { Component, OnInit } from '@angular/core';

import { UserSearchComponent } from '../user-search/user-search.component';
import { User } from '../user/user';

import { UserPermissionsComponent } from '../user-permissions/user-permissions.component';

import { PageSearchComponent } from '../page-search/page-search.component';
import { Page } from '../page/page';

@Component({
  selector: 'app-page-security',
  templateUrl: './page-security.component.html',
  styleUrls: ['./page-security.component.css']
})
export class PageSecurityComponent implements OnInit {

  user: User;
  page: Page;

  onSelectUser(user: User) {
    this.user = user;
  }

  onSelectPage(page: Page) {
    this.page = page;
  }
  constructor() { }

  ngOnInit() {
  }

}
