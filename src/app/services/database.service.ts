import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Database } from '../components/database/database';

@Injectable()
export class DatabaseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private databaseUrl = 'api/database';   // API URL

  constructor(private http: Http) {}

  getDatabases(): Promise<Database[]> {
    return this.http.get(this.databaseUrl)
      .toPromise()
      .then(res => res.json() as Database[])
      .catch(this.handleError);
  }

  getDatabase(id: number): Promise<Database> {
    const url = `${this.databaseUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Database)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.databaseUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(db: Database): Promise<Database> {
    return this.http
      .post(this.databaseUrl, JSON.stringify(db), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Database)
      .catch(this.handleError);
  }

  update(db: Database): Promise<Database> {
    const url = `${this.databaseUrl}/${db.id}`;
    return this.http
      .put(url, JSON.stringify(db), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}