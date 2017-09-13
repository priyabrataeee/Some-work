import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AssocType, RestOfForm } from '../components/monthend-snap/monthend-snap';

@Injectable()
export class MonthendSnapService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pageUrl = 'api/monthend-snap';   // API URL
  private pageUrl2 = 'api/emp-event';

  constructor(private http: Http) {}

  getAssocType(): Promise<AssocType[]> {
    return this.http.get(this.pageUrl)
      .toPromise()
      .then(res => res.json() as AssocType[])
      .catch(this.handleError);
  }

  getOtherFormData(): Promise<RestOfForm[]> {
    return this.http.get(this.pageUrl2)
      .toPromise()
      .then(res => res.json() as RestOfForm[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
