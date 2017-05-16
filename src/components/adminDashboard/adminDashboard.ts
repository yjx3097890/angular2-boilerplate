
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'admin-dashboard',//没用，用路由导航
    templateUrl: 'adminDashboard.html',
    styleUrls: ['adminDashboard.css']
})
export class AdminDashboardComponent implements OnInit {

    sessionId: Observable<string>;
    token: Observable<string>;


    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit () {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParams
            .map(params => params['session_id'] || 'None');

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None');
    }



}
