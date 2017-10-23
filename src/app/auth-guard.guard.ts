import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authGuardService: AuthGuardService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogIn(state.url);
  }
  checkLogIn = (url): boolean => {
    if (this._authGuardService.getIsLoggedIn() === true) {
      return true;
    } else {
      this._authGuardService.setRedirectUrl(url);
      this._router.navigateByUrl('/auth');
      return false;
    }
  }
}
