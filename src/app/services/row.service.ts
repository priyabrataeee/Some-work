import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Row } from '../components/row/row';

@Injectable()
export class RowService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private pageUrl = 'api/row';   // API URL

  constructor(private http: Http) {}

  getRows(): Promise<Row[]> {
    return this.http.get(this.pageUrl)
      .toPromise()
      .then(res => res.json() as Row[])
      .catch(this.handleError);
  }

  getRow(id: number): Promise<Row> {
    const url = `${this.pageUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Row)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.pageUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(row: Row): Promise<Row> {
    return this.http
      .post(this.pageUrl, JSON.stringify(row || null), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Row)
      .catch(this.handleError);
  }

  update(row: Row): Promise<Row> {
    const url = `${this.pageUrl}/${row.id}`;
    return this.http
      .put(url, JSON.stringify(row || null), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
