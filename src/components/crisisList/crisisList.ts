
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable }            from 'rxjs/Observable';

import  Crisis from '../../models/Crisis';
import { CrisisService } from '../../service/CrisisService';


@Component({
    selector: 'crisis-list',
    templateUrl: 'crisisList.html',
    styleUrls: ['crisisList.css']
})
export class CrisisListComponent implements OnInit {

    crises: Observable<Crisis[]>;
    selectedId: number;

    constructor(
        private service: CrisisService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    isSelected(crisis: Crisis) {
        return crisis.id === this.selectedId;
    }

    ngOnInit() {
        this.crises = this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.service.getCrises();
            });
    }

    onSelect(crisis: Crisis) {
        this.selectedId = crisis.id;
        // Navigate with relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
    }


}
