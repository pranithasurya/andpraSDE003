import {Component} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
	template:`
		    
	`

})

export class HomeComponent{

	constructor(private oauthService:OAuthService){

	}

	ngOnInit(){
		this.login();
	}

	login(){
		this.oauthService.initImplicitFlow("http://localhost:4200/home");
		    this.oauthService.tryLogin({
      onTokenReceived: context => {
        console.log(context.state);
      }
    });
	}

	logout(){
		this.oauthService.logOut();
	}

	get givenName(){
		const claims = this.oauthService.getIdentityClaims();
		if(!claims){
			return null;
		}
		return claims['name'];

	}

}