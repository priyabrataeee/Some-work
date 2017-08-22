import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Database }        from '../database/database';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-database-detail',
  templateUrl: './database-detail.component.html',
  styleUrls: ['./database-detail.component.css']
})
export class DatabaseDetailComponent implements OnInit {
  database: Database;

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.databaseService.getDatabase(+params.get('id')))
      .subscribe(database => this.database = database);
  }

  save(): void {
    this.databaseService.update(this.database)
      .then(() => this.goBack());
  }

  delete(db: Database): void {
    this.databaseService
        .delete(db.id)
        .then(() => {
          this.location.back();
        });
  }

  goBack(): void {
    this.location.back();
  }

}
