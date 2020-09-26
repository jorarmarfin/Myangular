import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LeeDataComponent } from './components/lee-data/lee-data.component';
import { EscribeDataComponent } from './components/escribe-data/escribe-data.component';
import { EscribeDrupalComponent } from './components/escribe-drupal/escribe-drupal.component';
import { LeeDrupalComponent } from './components/lee-drupal/lee-drupal.component';
import { Login2Component } from './components/login2/login2.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LeeDataComponent,
    EscribeDataComponent,
    EscribeDrupalComponent,
    LeeDrupalComponent,
    Login2Component,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'jamc.us.auth0.com',
      clientId: 'aPo7aZdW88Z5evAo6ygqHo5rk6h9zIMz'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
