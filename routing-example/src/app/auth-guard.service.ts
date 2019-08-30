import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthFakeService } from './auth-fake.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
 
    constructor(private authService: AuthFakeService,
                private router: Router){}

    canActivate(router: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated){
                        return true;
                    } else {
                        this.router.navigate(['/']);
                        return false;
                    }
                }
            );
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
          return this.canActivate(childRoute,state);
       }
}