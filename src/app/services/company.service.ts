import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Company } from '../components/company/company';

@Injectable()
export class CompanyService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private companyUrl = 'api/company';   // API URL

  constructor(private http: Http) {}

  getCompanies(): Promise<Company[]> {
    return this.http.get(this.companyUrl)
      .toPromise()
      .then(res => res.json() as Company[])
      .catch(this.handleError);
  }

  getCompany(id: number): Promise<Company> {
    const url = `${this.companyUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Company)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.companyUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(company: Company): Promise<Company> {
    return this.http
      .post(this.companyUrl, JSON.stringify(company), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Company)
      .catch(this.handleError);
  }

  update(company: Company): Promise<Company> {
    const url = `${this.companyUrl}/${company.id}`;
    return this.http
      .put(url, JSON.stringify(company), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}