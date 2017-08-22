import { Component, OnInit, EventEmitter, Output } 
                             from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { UserSearchService } from '../../services/user-search.service';
import { User }              from '../user/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  users: Observable<User[]>;
  user: User;

  @Output() onSelectUser = new EventEmitter<User>();
  
  private searchTerms = new Subject<string>();

  constructor(
    private userSearchService: UserSearchService
  ) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  selectUser(user) {
    this.user = user;
    this.onSelectUser.emit(user);
  }

  ngOnInit(): void {
    this.users = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term
          ? this.userSearchService.search(term)
          : Observable.of<User[]>([]))
        .catch(error => {
          console.log(error);
          return Observable.of<User[]>([]);
        });
  }

}
