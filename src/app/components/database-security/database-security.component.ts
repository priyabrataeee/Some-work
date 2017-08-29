import { Component, OnInit } from '@angular/core';

import { UserSearchComponent } from '../user-search/user-search.component';
import { User } from '../user/user';

import { UserPermissionsComponent } from '../user-permissions/user-permissions.component';

import { DatabaseSearchComponent } from '../database-search/database-search.component';
import { Database } from '../database/database';

@Component({
  selector: 'app-database-security',
  templateUrl: './database-security.component.html',
  styleUrls: ['./database-security.component.css']
})
export class DatabaseSecurityComponent implements OnInit {

  user: User;
  database: Database;

  onSelectUser(user: User) {
    this.user = user;
  }

  onSelectDB(database: Database) {
    this.database = database;
  }
  constructor() { }

  ngOnInit() {
  }

}
