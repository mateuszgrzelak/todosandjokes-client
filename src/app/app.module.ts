import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ParticlesModule } from 'ngx-particle';
import { AboutWebsiteComponent } from './about-website/about-website.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoggedContentComponent } from './logged-content/logged-content.component';
import { JokesComponent } from './jokes/jokes.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './service/http/loader.service';
import { LoaderInterceptor } from './service/http/loader-interceptor.service';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ResultDialogComponent } from './registration/result-dialog/result-dialog.component';
import { JWT_NAME } from './app.constants';

export const environment = {
  production: true,
  api: 'https://todosandjokesapi.herokuapp.com',
  whitelist: ['todosandjokesapi.herokuapp.com', 'https://todosandjokesapi.herokuapp.com', 'todosandjokesapi.herokuapp:443'],
  version: 'x.x.x',
};

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('${JWT_NAME}');
    },
    whitelistedDomains: environment.whitelist
  }
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    LogoutComponent,
    UpdateTodoComponent,
    AboutWebsiteComponent,
    RegistrationComponent,
    LoggedContentComponent,
    JokesComponent,
    ResultDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ParticlesModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    }),
  ],
  entryComponents: [
    ResultDialogComponent
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
