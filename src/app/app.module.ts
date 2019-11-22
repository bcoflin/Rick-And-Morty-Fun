import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes, AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './shared/services/auth.service';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './materials/material.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './shared/services/home.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeNavComponent } from './home/nav/nav.component';
import { TokenInterceptor } from './token.interceptor';
import { CharactersComponent } from './home/characters/characters.component';
import { FourOFourComponent } from './shared/four-ofour/four-ofour.component';
import { ProfileModule } from './profile/profile.module';
import { SnackBarService } from './shared/services/snackbarservice';





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    HomeNavComponent,
    CharactersComponent,
    FourOFourComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ProfileModule
  ],
  exports: [HomeNavComponent, RouterModule],
  providers: [AuthService, HomeService, AuthGuard, SnackBarService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
