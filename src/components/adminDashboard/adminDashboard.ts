
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    moduleId: String(module.id),
    selector: 'admin-dashboard',//没用，用路由导航
    templateUrl: 'adminDashboard.html',
    styleUrls: ['adminDashboard.css']
})
export class AdminDashboardComponent implements OnInit {




    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit () {

    }



}
