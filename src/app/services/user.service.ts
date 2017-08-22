import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../components/user/user';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'api/user';   // API URL

  constructor(private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.userUrl)
      .toPromise()
      .then(res => res.json() as User[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.userUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(user: User): Promise<User> {
    return this.http
      .post(this.userUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}