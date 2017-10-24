import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { AuthGuardService } from './auth-guard.service';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PasswordComponent } from './auth/password/password.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
      path: 'auth',
      component: AuthComponent,
      children: [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      } ,
      {
        path: 'password',
        component: PasswordComponent
      }]
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
    }
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
