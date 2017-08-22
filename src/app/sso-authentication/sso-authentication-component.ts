/**
 * Created by ahe453 on 6/16/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {SSOAuthService} from './sso-authentication-service';
import {OAuthConstants} from './sso-authentication-model';

@Component({
  selector: 'app-sso-auth-component',
  template: '<div class="page-header" id="header">' +
  '<div class="container"> ' +
  '<h2 class="text-center"><span class="text-central"> {{display_string}}</span></h2> ' +
  '</div> ' +
  '</div>',
  providers: [SSOAuthService]
})

export class SSOAuthComponent implements OnInit {

  public display_string = 'Verifying identity...';

  constructor(
    private ssoAuthService: SSOAuthService,
    private router: Router
  ) {}

  ngOnInit() {

    if (!OAuthConstants.ALLOW_SSO) {
      this.display_string = "SSO Allowed";
      this.router.navigateByUrl('/dashboard');
    } else if (Cookie.get('LoginId')) {
      this.display_string = "Cookie Available";
      this.router.navigateByUrl('/dashboard');
    } else if (!Cookie.get('LoginId')) {
      this.ssoAuthService.authenticateToken();
    }

    setTimeout(() => { this.display_string = 'Denied'; }, 2000);
  }

}
