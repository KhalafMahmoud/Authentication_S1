import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
  constructor(private router: Router){};
  canActivate(){
    let cookie: CookieService = new CookieService;
    if (cookie.get('username') == undefined) {
        this.router.navigate(['/authentication/signin']);
        return false;
    } else {
        return true;
    }

  };
   


  canActivateChild(){
    let cookie: CookieService = new CookieService;
    if (cookie.get('username') == undefined) {
        this.router.navigate(['/authentication/signin']);
        return false;
    } else {
        return true;
    }


  };
}
