import { Component, OnInit } from '@angular/core';
import { RowUser } from './rowUser';

import { UserPermissionsComponent } from '../user-permissions/user-permissions.component';

import { RowSearchComponent } from '../row-search/row-search.component';
import { Row } from '../row/row';

@Component({
  selector: 'app-row-security',
  templateUrl: './row-security.component.html',
  styleUrls: ['./row-security.component.css']
})
export class RowSecurityComponent implements OnInit {

  user: RowUser;
  row: Row;

  onSelectUser(user: RowUser) {
    this.user = user;
  }

  onSelectRow(row: Row) {
    this.row = row;
  }
  constructor() { }

  ngOnInit() { }

}
