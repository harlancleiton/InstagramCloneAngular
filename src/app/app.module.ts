import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { BannerComponent } from './Access/banner/banner.component';
import { LoginComponent } from './Access/login/login.component';
import { RegisterComponent } from './Access/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
