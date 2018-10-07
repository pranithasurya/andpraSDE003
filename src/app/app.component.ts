import { Component } from '@angular/core';
import {OAuthService, JwksValidationHandler} from 'angular-oauth2-oidc';
import {AuthConfigInstance} from './oauth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pranitha';
  clientId = 'QnIreW2PkIbD1K7qHm0h9Q';
  clientSecret = 'CP8YxDdDlrFeu7Gg8Cdbvm4AGXTgaRfv9W4zpHDFk';

  constructor(private oauthService: OAuthService){

/*this.oauthService.loginUrl = 'https://www.goodreads.com/oauth/authorize';

this.oauthService.dummyClientSecret = this.clientSecret;
    this.oauthService.redirectUri = 'http://localhost:4200';
    this.oauthService.clientId = this.clientId;
    this.oauthService.setStorage(localStorage);
    this.oauthService.requireHttps = false;
    this.oauthService.responseType = 'token';
    this.oauthService.tokenEndpoint = 'https://www.goodreads.com/oauth/access_token';
    this.oauthService.oidc = true;
    this.oauthService.issuer = 'https://www.goodreads.com/oauth/request_token?oauth_callback=http://localhost:4200';
    //this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.requestAccessToken = true;
    this.oauthService.showDebugInformation = true;
    this.oauthService.scope = 'openid profile email';
*/

    this.oauthService.configure(AuthConfigInstance);
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tryLogin({
      onTokenReceived: context =>{
        console.log(context);
      }
    })


 }


}
