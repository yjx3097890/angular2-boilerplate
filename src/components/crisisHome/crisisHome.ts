
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
    moduleId: String(module.id),
    selector: 'crisis-home',
    templateUrl: 'crisisHome.html',
    styleUrls: ['crisisHome.css']
})
export class CrisisHomeComponent implements OnInit {




    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit () {

    }



}
