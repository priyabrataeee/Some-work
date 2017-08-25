import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DatabaseSearchService } from '../../services/database-search.service';
import { Database } from '../database/database';

@Component({
  selector: 'app-database-search',
  templateUrl: './database-search.component.html',
  styleUrls: ['./database-search.component.css'],
  providers: [DatabaseSearchService]
})
export class DatabaseSearchComponent implements OnInit {

  databases: Observable<Database[]>;
  database: Database;

  @Output() onSelectDB = new EventEmitter<Database>();

  private searchTerms = new Subject<string>();

  constructor(
    private databaseService: DatabaseSearchService
  ) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  selectDB(database) {
    this.database = database;
    this.onSelectDB.emit(database);
  }

  ngOnInit(): void {
    this.databases = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term
          ? this.databaseService.search(term)
          : Observable.of<Database[]>([]))
        .catch(error => {
          console.log(error);
          return Observable.of<Database[]>([]);
        });
  }

}
