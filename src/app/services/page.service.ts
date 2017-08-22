import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Page } from '../components/page/page';

@Injectable()
export class PageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private pageUrl = 'api/page';   // API URL

  constructor(private http: Http) {}

  getPages(): Promise<Page[]> {
    return this.http.get(this.pageUrl)
      .toPromise()
      .then(res => res.json() as Page[])
      .catch(this.handleError);
  }

  getPage(id: number): Promise<Page> {
    const url = `${this.pageUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Page)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.pageUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(page: Page): Promise<Page> {
    return this.http
      .post(this.pageUrl, JSON.stringify(page || null), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Page)
      .catch(this.handleError);
  }

  update(page: Page): Promise<Page> {
    const url = `${this.pageUrl}/${page.id}`;
    return this.http
      .put(url, JSON.stringify(page || null), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
