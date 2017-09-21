import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { MonthendReport } from '../components/monthend-snap-report/monthend-report';


@Injectable()
export class MonthendSnapReportService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pageUrl = 'api/monthend-snap-report';   // API URL

  constructor(private http: Http) { }

  getMonthendReport(date: string, assoc: string): Promise<MonthendReport[]> {
    return this.http.get(this.pageUrl)
      .toPromise()
      .then(res => res.json() as MonthendReport[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
