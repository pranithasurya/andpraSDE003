import {AuthConfig} from 'angular-oauth2-oidc';

export const AuthConfigInstance: AuthConfig ={
	clientId: 'QnIreW2PkIbD1K7qHm0h9Q',
	dummyClientSecret: 'CP8YxDdDlrFeu7Gg8Cdbvm4AGXTgaRfv9W4zpHDFk',

	oidc:false,
	redirectUri:'http://localhost:4200/quotes',
	scope:'profile openId',
	requestAccessToken: true,
	responseType:'token',
	loginUrl: 'https://www.goodreads.com/oauth/authorize',
	tokenEndpoint:'https://www.goodreads.com/oauth/access_token',
	issuer:'https://www.goodreads.com/oauth/request_token',
	
	requireHttps: false

}