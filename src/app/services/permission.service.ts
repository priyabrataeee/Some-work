import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Permission }  from '../components/permission/permission';
import { Company }     from '../components/company/company';
import { UserCompany } from '../components/user-permissions/user-company';

@Injectable()
export class PermissionService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private permissionUrl = 'api/permission';   // API URL

  constructor(private http: Http) {}

  getPermissions(): Promise<Permission[]> {
    return this.http.get(this.permissionUrl)
      .toPromise()
      .then(res => res.json() as Permission[])
      .catch(this.handleError);
  }

  getPermission(id: number): Promise<Permission> {
    const url = `${this.permissionUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Permission)
      .catch(this.handleError);
  }

  getUserCompanies(id: number): Promise<UserCompany[]> {
    const url = `${this.permissionUrl}/?user_id=${id}&item=company`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as UserCompany[])
      .catch(this.handleError);
  }

  getCompanyPermissions(id: number): Promise<Permission[]> {
    const url = `${this.permissionUrl}/?company_id=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Permission[])
      .catch(this.handleError);
  }

  create(permission: Permission): Promise<Permission> {
    return this.http
      .post(this.permissionUrl, JSON.stringify(permission), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Permission)
      .catch(this.handleError);
  }

  update(permission: Permission): Promise<Permission> {
    const url = `${this.permissionUrl}/${permission.id}`;
    return this.http
      .put(url, JSON.stringify(permission), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.permissionUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}