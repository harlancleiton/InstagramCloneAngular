//region Imports
//region Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
//endregion Angular

//region Components
import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { BannerComponent } from './access/banner/banner.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './Home/posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//endregion Components

//region Services
import { Authentication } from './services/authentication.service';
import { ROUTES } from './routes/app.routes';
import { NavigationService } from './services/navigation.service';
import { AuthenticationGuard } from './routes/routes-guard/authentication-guard.service';
//endregion Services
//endregion Imports

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PostsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Authentication, NavigationService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
