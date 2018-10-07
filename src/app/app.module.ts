import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './shared';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import {DataretrieverService} from './dataretriever.service';
import { QuotesComponent } from './quotes/quotes.component';

const appRoutes: Routes = [
  {path:'quotes', component: QuotesComponent},
  {path:'posts', component: PostsComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent,  PostsComponent, QuotesComponent
  ],
  imports: [
    BrowserModule, OAuthModule.forRoot(

    	), HttpClientModule, RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HttpClientModule, DataretrieverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
