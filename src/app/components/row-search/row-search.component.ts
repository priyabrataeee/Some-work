import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { RowSearchService } from '../../services/row-search.service';
import { Row } from '../row/row';

@Component({
  selector: 'app-row-search',
  templateUrl: './row-search.component.html',
  styleUrls: ['./row-search.component.css'],
  providers: [RowSearchService]
})
export class RowSearchComponent implements OnInit {

  rows: Observable<Row[]>;
  row: Row;

  @Output() onSelectRow = new EventEmitter<Row>();

  private searchTerms = new Subject<string>();

  constructor(
    private rowSearchService: RowSearchService
  ) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  selectPage(row) {
    this.row = row;
    this.onSelectRow.emit();
  }

  ngOnInit(): void {
    this.rows = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term
          ? this.rowSearchService.search(term)
          : Observable.of<Row[]>([]))
        .catch(error => {
          console.log(error);
          return Observable.of<Row[]>([]);
        });
  }

}
