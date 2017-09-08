import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AssocType } from '../components/monthend-snap/monthend-snap';

@Injectable()
export class MonthendSnapService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pageUrl = 'api/monthend-snap';   // API URL

  constructor(private http: Http) {}

  getAssocType(): Promise<AssocType[]> {
    return this.http.get(this.pageUrl)
      .toPromise()
      .then(res => res.json() as AssocType[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
