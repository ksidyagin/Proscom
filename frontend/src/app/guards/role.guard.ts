import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../public/services/auth-service/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TABLE_ACCESS_ROUTE } from './consts';

@Injectable(
    {providedIn: 'root'}
)
export class RoleGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router, private jwtService: JwtHelperService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.jwtService.isTokenExpired()) {
        this.router.navigate(['']);
        return false;
    } 
    else{
        //@ts-ignore
        let user = this.jwtService.decodeToken()
        let roles = route.url[0].path;
        if (roles.includes(user.user.roles[0].toLowerCase())) {
          return true;
        } else {
          this.router.navigate(['/public/login']);
          return false;
        }

      }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
}
