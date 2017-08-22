import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../components/user/user';

@Injectable()
export class UserSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<User[]> {
    return this.http
               .get(`api/user/?eid=%${term}%`)
               .map(res => res.json() as User[])
  }
}