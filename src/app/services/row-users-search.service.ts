import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RowUser } from '../components/row-security/rowUser';

@Injectable()
export class RowUsersSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<RowUser[]> {
    return this.http
                .get(`api/rowUser/?name=%${term}%`)
                .map(res => res.json() as RowUser[]);
  }

}
