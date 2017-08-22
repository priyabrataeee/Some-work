/**
 * Created by ahe453 on 6/16/17.
 */
import {Router, ActivatedRoute} from '@angular/router';
import {Injectable, Inject} from '@angular/core';
import {OAuthConstants} from './sso-authentication-model';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SSOAuthService {
  private codeParam: string;
  public userId: string;
  public LoginId: string[];

  constructor( @Inject(Router) private router: Router, private route: ActivatedRoute, private http: Http) {
    const codeParam = '';
    this.route.queryParams.subscribe(params => {
      this.codeParam = params['code'];
    });
  }

  authenticateToken() {
    try {
      if (this.codeParam === undefined) {
        try {
          window.location.href = OAuthConstants.AUTHORIZATION_URL + '?client_id=' +
            OAuthConstants.CLIENT_ID + '&redirect_uri=' + OAuthConstants.REDIRECT_URL + '&scope=openid%20profile%20mobileapp&response_type=code';
        } catch (err) {
          alert('Exception during Redirection to Login Server :' + JSON.stringify(err));
        }
      } else if (!Cookie.get('Token')) {
        const authCode = this.codeParam;
        this.getToken('?code=' + authCode + '&grant_type=authorization_code&redirect_uri=' + OAuthConstants.REDIRECT_URL);
      } else {
        this.getToken('?grant_type=refresh_token&refresh_token=' + Cookie.get('RefreshToken'));
      }
    } catch (err) {
      alert('Authenticate User Failed :' + JSON.stringify(err));
    }
  }

  getToken(queryString: string) {
    const base64AuthorizationCode = window.btoa(OAuthConstants.CLIENT_ID + ':' + OAuthConstants.SECRET_KEY);
    const headers = new Headers({
      'Authorization': 'Basic ' + base64AuthorizationCode,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.http.post(OAuthConstants.TOKEN_URL + queryString, '', { headers: headers })
      .map(res => res.json())
      .subscribe(
        result => {
          if (result && result.access_token) {
            Cookie.set('Token', result.access_token, (1 / 48));
            Cookie.set('RefreshToken', result.refresh_token, (1 / 48));
            this.getOpenIdInfo(result.access_token);
          }
        },
        error => {
          alert('Token-API failed :' + JSON.stringify(error) + ' QueryString : ' + queryString);
        }
      );
  }


  getOpenIdInfo(accessToken: string) {
    const headers = new Headers({
      'Authorization': 'Bearer ' + accessToken
    });

    this.http.get(OAuthConstants.OPEN_ID_URL, { headers: headers })
      .map(res => res.json())
      .subscribe(
        response => {
          if (response && response.ADGroups) {
            this.userId = response.userid;
            Cookie.set('LoginId', window.btoa(response.userid), (1 / 48));
            Cookie.set('userid', response.userid);
            Cookie.set('fname', response.FName);
            Cookie.set('lname', response.LName);
            Cookie.set('email', response.eMail);
            this.router.navigateByUrl('/dashboard');
          } else {
            alert('Token-API successful, but openId-API returned response as :' + JSON.stringify(response));
          }
        },
        error => {
          alert('Token-API successful, but openId-API failed :' + JSON.stringify(error));
        }
      );
  }
}
