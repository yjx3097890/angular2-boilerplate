
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

import Crisis from '../../models/Crisis';
import { DialogService } from '../../service/DialogService';

@Component({
    moduleId: String(module.id),
    selector: 'crisis-detail',
    templateUrl: 'crisisDetail.html',
    styleUrls: ['crisisDetail.css']
})
export class CrisisDetailComponent implements OnInit {



    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) {}

    ngOnInit() {
        // this.route.data
        //     .subscribe((data: { crisis: Crisis }) => {
        //         this.editName = data.crisis.name;
        //         this.crisis = data.crisis;
        //     });

    }

    cancel() {
        this.gotoCrises();
    }
    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }


}
