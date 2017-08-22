/**
 * Created by ahe453 on 6/19/17.
 */
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {OAuthConstants} from './sso-authentication-model';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Injectable()
export class SSOAuthGuard implements CanActivate {

  private userId: string;
  private groups: string;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!OAuthConstants.ALLOW_SSO) {
      return true;
    }
    if (!Cookie.get('LoginId')) {
      this.router.navigateByUrl('/app-sso-auth-component');
      return false;
    }
    this.groups = window.atob(Cookie.get('LoginId'));

    return true;
  }
}
