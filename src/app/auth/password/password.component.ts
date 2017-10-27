import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuardService } from '../../auth-guard.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  loginErr = false;
  loginName: string;
  passwordForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private _authGuardService: AuthGuardService, private _router: Router, private _fb: FormBuilder, private _route: ActivatedRoute) {
    this.createForm();
    this.loginName = this._route.queryParams['login'];
    console.log(this._route.queryParams);
  }

  ngOnInit() {
  }

  login = (login, password) => this._authGuardService.login(login, password).subscribe( p => {
    if ( p ) { // result from observable if credentials proper
      let redirectURL = this._authGuardService.getRedirectUrl(); // get redirect url if there was one
      if ( !redirectURL ) {
        this._router.navigate( ['/viewer'] );
      } else {
        this._router.navigate( [redirectURL] );
      }
     } else {
       this.loginErr = true;
      }
    },
    err => this.loginErr = true)

  createForm = () => this.passwordForm = this._fb.group({ // funcion for creating form validation
    password: ['', Validators.required],
  })
  submitForm = (value) => { // form submitting
    this._route.queryParams.subscribe( q => this.login(q['login'], value.password), err => this.loginErr = true);
  }

}
