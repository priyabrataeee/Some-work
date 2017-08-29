import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Database } from '../components/database/database';

@Injectable()
export class DatabaseSearchService {

  constructor(private http: Http) {}

    search(term: string): Observable<Database[]> {
      return this.http
                  .get(`api/database/?name=%${term}%`)
                  .map(res => res.json() as Database[]);
    }

}
