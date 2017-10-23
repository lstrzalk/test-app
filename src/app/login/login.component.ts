import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginErr = false;
  loginForm: FormGroup;
  constructor(private _authGuardService: AuthGuardService, private _router: Router, private _fb: FormBuilder) {
    this.createForm();
  }
  login = (login, password) => this._authGuardService.login(login, password).subscribe( p => {
            if ( p ) { // result from observable if credentials proper
              let redirectURL = this._authGuardService.getRedirectUrl(); // get redirect url if there was one
              if ( !redirectURL ) {
                this._router.navigate( ['/search'] );
              } else {
                this._router.navigate( [redirectURL] );
              }
             } else {
               this.loginErr = true;
              }
            },
            err => this.loginErr = true)
  createForm = () => this.loginForm = this._fb.group({ // funcion for creating form validation
    login: ['', Validators.required],
    password: ['', Validators.required],
  })
  submitForm = (value) => { // form submitting
    this.login(value.login, value.password);
  }

}
