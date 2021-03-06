import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WarframesComponent } from './components/warframes/warframes.component';
import { PrimariesComponent } from './components/primaries/primaries.component'
import { SecondariesComponent } from './components/secondaries/secondaries.component'
import { MeleesComponent } from './components/melees/melees.component'
import { UserHomeComponent } from './components/user-home/user-home.component'
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component'
import { UsersComponent } from './components/users/users.component'
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WarframesComponent,
    PrimariesComponent,
    SecondariesComponent,
    MeleesComponent,
    UserHomeComponent,
    UserNavbarComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
