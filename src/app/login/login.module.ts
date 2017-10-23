import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthGuardService } from '../auth-guard.service';
import { JsonDataService } from './json-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
  providers: [JsonDataService]
})
export class LoginModule { }
