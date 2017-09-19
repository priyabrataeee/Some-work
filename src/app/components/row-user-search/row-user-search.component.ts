import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import { RowUsersSearchService } from '../../services/row-users-search.service';

import { RowUser } from '../row-security/rowUser';

@Component({
  selector: 'app-row-user-search',
  templateUrl: './row-user-search.component.html',
  styleUrls: ['./row-user-search.component.css'],
  providers: [RowUsersSearchService]
})
export class RowUserSearchComponent implements OnInit {
  rowUsers: Observable<RowUser[]>;
  rowUser: RowUser;

  @Output() onSelectUser = new EventEmitter<RowUser>();
  private searchTerms = new Subject<string>();

  constructor(
    private rowUsersSearchService: RowUsersSearchService) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  selectUser(rowUser) {
    this.rowUser = rowUser;
    this.onSelectUser.emit(rowUser);
  }

  ngOnInit() {
    this.rowUsers = this.searchTerms
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap(term => term
      ? this.rowUsersSearchService.search(term)
      : Observable.of<RowUser[]>([]))
    .catch(error => {
      console.log(error);
      return Observable.of<RowUser[]>([]);
    });
  }

}
