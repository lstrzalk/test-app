import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { JsonDataService } from './login/json-data.service';

@Injectable()
export class AuthGuardService {

  private _isLoggedIn = false;
  private _redirectUrl;

  constructor(private _jsonDataService: JsonDataService) { }
  public login = (login, password) => this._jsonDataService.getData()
        .map( p => {
            if (p[login] === password) {
              console.log(p[login], password, p[login] === password);
              this._isLoggedIn = true;
              return true;
            } else {
              console.log(p[login], password, p[login] === password);
              this._isLoggedIn = false;
              return false;
            }
          },
          err => false)
  public logout = () => this._isLoggedIn = false;
  public getIsLoggedIn = () => this._isLoggedIn;
  public setRedirectUrl = (url) => this._redirectUrl = url;
  public getRedirectUrl = () => this._redirectUrl ? this._redirectUrl : false;

}
