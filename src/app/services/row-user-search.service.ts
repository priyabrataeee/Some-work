import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RowUser } from '../components/row-security/rowUser';

@Injectable()
export class RowUserSearchService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pageUrl = 'api/rowUser';   // API URL

  constructor(private http: Http) {}

  getRowUsers(term: string): Promise<RowUser[]> {
    const url = `${this.pageUrl}/${term}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as RowUser[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
