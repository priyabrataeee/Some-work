import { Component, OnInit } from '@angular/core';

import { RowUserSearchService } from '../../services/row-user-search.service';
import { RowUser } from './rowUser';

import { UserPermissionsComponent } from '../user-permissions/user-permissions.component';

import { RowSearchComponent } from '../row-search/row-search.component';
import { Row } from '../row/row';

@Component({
  selector: 'app-row-security',
  templateUrl: './row-security.component.html',
  styleUrls: ['./row-security.component.css'],
  providers: [RowUserSearchService]
})
export class RowSecurityComponent implements OnInit {

  rowUser: RowUser[];
  user: RowUser;
  row: Row;

  onSelectUser(user: RowUser) {
    this.user = user;
  }

  onSelectRow(row: Row) {
    this.row = row;
  }
  constructor(
    private rowUserSearchService: RowUserSearchService
  ) { }

  getRowUsers(term: string) {
    this.rowUserSearchService
        .getRowUsers(term)
        .then(rowUser => this.rowUser = rowUser);
  }

  ngOnInit() {
  }

}
