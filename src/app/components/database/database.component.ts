import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Database } from './database';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  databases: Database[];
  selectedDb: Database;
  newDb: Database;

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) { }

  getDatabases(): void {
    this.databaseService
        .getDatabases()
        .then(databases => this.databases = databases);
  }

  ngOnInit() {
    this.getDatabases();
    this.newDb = new Database();
  }

  add(db: Database): void {
    // Validations Here
    this.databaseService.create(db)
      .then(db => {
        this.databases.push(db)
        this.selectedDb = null
      });
  }

  onSelect(db: Database): void {
    this.router.navigate(['/database', db.id]);
  }

  gotoDetail(): void{
    this.router.navigate(['/database', this.selectedDb.id]);
  }
}
