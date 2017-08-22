import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Page } from '../components/page/page';

@Injectable()
export class PageSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Page[]> {
    return this.http
                .get(`api/page/?name=%${term}%`)
                .map(res => res.json() as Page[]);
  }

}
