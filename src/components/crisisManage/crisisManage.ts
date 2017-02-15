
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    moduleId: String(module.id),
    selector: 'crisis-manage',//没用，用路由导航
    templateUrl: 'crisisManage.html',
    styleUrls: ['crisisManage.css']
})
export class CrisisManageComponent implements OnInit {




    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit () {

    }



}
