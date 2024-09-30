import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { authGuard } from './auth.guard';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Home', component: HomeComponent, canActivate: [authGuard],
    children: [
      {path: '', redirectTo: 'AboutMe', pathMatch: 'full'},
      {path: 'AboutMe', component: AboutMeComponent},
    ],
  },
  {path:'**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  HomeComponent,
  AboutMeComponent,
  Page404Component,
]