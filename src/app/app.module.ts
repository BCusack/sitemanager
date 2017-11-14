import { SiteService } from './_services/site.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { NavComponent } from './shared/nav/nav.component';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
