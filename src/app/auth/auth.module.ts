import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { JsonDataService } from './json-data.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [PasswordComponent, LoginComponent, AuthComponent],
  providers: [JsonDataService]
})
export class AuthModule { }
