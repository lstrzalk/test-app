import { Component, OnInit } from '@angular/core';
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
  constructor(private _router: Router, private _fb: FormBuilder) {
    this.createForm();
  }
  createForm = () => this.loginForm = this._fb.group({ // funcion for creating form validation
    login: ['', Validators.required],
  })
  submitForm = (value) => { // form submitting
    this._router.navigate(['/auth/password'], {queryParams: {login: value.login}});
  }

}
