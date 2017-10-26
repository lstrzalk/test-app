import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { AuthGuardService } from './auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PasswordComponent } from './auth/password/password.component';
import { ViewerComponent } from './viewer/viewer.component';
import { SearchComponent } from './viewer/search/search.component';
import { ResultComponent } from './viewer/result/result.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/viewer',
        pathMatch: 'full'
    },
    {
      path: 'auth',
      component: AuthComponent,
      children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      } ,
      {
        path: 'password',
        component: PasswordComponent
      }]
    },
    {
      path: 'viewer',
      canActivate: [AuthGuard],
      component: ViewerComponent,
      children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        canActivate: [AuthGuard],
        component: SearchComponent
      },
      {
        path: 'result/:id',
        canActivate: [AuthGuard],
        component: ResultComponent
      }]
    },
  ];
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true, // <-- debugging purposes only
        }
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
        AuthGuard,
        AuthGuardService
    ]
  })
  export class AppRoutingModule { }
