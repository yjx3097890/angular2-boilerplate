
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    moduleId: String(module.id),
    selector: 'crisis-center',//没用，用路由导航
    templateUrl: './crisisCenter.html',
    styleUrls: ['./crisisCenter.css']
})
export class CrisisCenterComponent implements OnInit {




    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit () {

    }



}
