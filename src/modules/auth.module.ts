import { NgModule }             from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { AuthGuardService } from '../service/AuthGuardService';
import { AuthService } from '../service/AuthService';
import { AuthRoutingModule }       from '../router/auth';
import { LoginComponent }       from '../components/login/login';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthGuardService,
        AuthService
    ]
})
export class AuthModule {}