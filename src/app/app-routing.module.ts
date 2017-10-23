import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { DetailsComponent } from './result/details/details.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'search',
      canActivate: [AuthGuard],
      component: SearchComponent
    },
    {
      path: 'result',
      canActivate: [AuthGuard],
      component: ResultComponent,
      children: [ { path: 'details', component: DetailsComponent} ]
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
