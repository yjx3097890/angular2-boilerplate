
import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras
}                           from '@angular/router';

import { AuthService }      from './AuthService';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //ActivatedRouteSnapshot包含了即将被激活的路由，而RouterStateSnapshot包含了该应用即将到达的状态。
        let url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Create a dummy session id
        let sessionId = 123456789;
        // Set our navigation extras object
        // that contains our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };

        // Navigate to the login page with extras
        this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}