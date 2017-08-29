import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Row } from '../components/row/row';

@Injectable()
export class RowSearchService {

  constructor(private http: Http) {}

    search(term: string): Observable<Row[]> {
      return this.http
                  .get(`api/row/?name=%${term}%`)
                  .map(res => res.json() as Row[]);
    }

}
