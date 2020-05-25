import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { AboutWebsiteComponent } from './about-website/about-website.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoggedContentComponent } from './logged-content/logged-content.component';
import { JokesComponent } from './jokes/jokes.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { animation: "LoginPage" } },
  { path: 'about', component: AboutWebsiteComponent, data: { animation: "AboutPage" } },
  { path: 'registration', component: RegistrationComponent, data: { animation: "RegistrationPage" } },
  {
    path: '', component: LoggedContentComponent, data: { animation: "ContentPage" },
    children: [
      { path: '', redirectTo: 'todos', pathMatch: 'full'},
      { path: 'todos', component: ListTodosComponent, data: { animation: "TodosPage" } },
      { path: 'logout', component: LogoutComponent, data: { animation: "LogoutPage" } },
      { path: 'todos/update/:id', component: UpdateTodoComponent, },
      { path: 'welcome', component: WelcomeComponent, data: { animation: "WelcomePage" }},
      { path: 'jokes', component: JokesComponent, data: { animation: "JokesPage" }},
    ]
  },
  { path: '**', component: ErrorComponent }
];
// canActivate: [RouteGuardService] 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
