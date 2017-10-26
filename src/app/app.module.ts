import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.guard';
import { AuthGuardService } from './auth-guard.service';
import { AuthModule } from './auth/auth.module';
import { ViewerModule } from './viewer/viewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    ViewerModule
  ],
  providers: [AuthGuard, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
