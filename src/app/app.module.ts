//region Imports
//region Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
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
import { PostsComponent } from './home/posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewPostComponent } from './header/new-post/new-post.component';
//endregion Components

//region Services
import { Authentication } from './services/authentication.service';
import { ROUTES } from './routes/app.routes';
import { NavigationService } from './services/navigation.service';
import { AuthenticationGuard } from './routes/routes-guard/authentication-guard.service';
import { PostService } from './services/post.service';
import { StorageService } from './services/storage.service';
import { ProgressService } from './services/progress.service';
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
    FooterComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Authentication, NavigationService, AuthenticationGuard, PostService, StorageService, ProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
