
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    moduleId: String(module.id),
    selector: 'admin',//没用，用路由导航
    templateUrl: 'admin.html',
    styleUrls: ['admin.css']
})
export class AdminComponent implements OnInit {




    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit () {

    }



}
