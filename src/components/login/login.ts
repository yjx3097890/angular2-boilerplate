
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router';

import { AuthService } from '../../service/AuthService';

@Component({
    moduleId: String(module.id),
    selector: 'login',//没用，用路由导航
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})
export class LoginComponent {

    message: string;
    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }
    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl
                    : '/login';

                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };

                // Redirect the user
                this.router.navigate([redirect], navigationExtras);

            }
        });
    }
    logout() {
        this.authService.logout();
        this.setMessage();
    }



}
