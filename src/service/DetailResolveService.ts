
import { Injectable }             from '@angular/core';
import { Router, Resolve,
    ActivatedRouteSnapshot } from '@angular/router';


import { CrisisService } from './CrisisService';
import Crisis from '../models/Crisis';

@Injectable()
export class DetailResolveService implements Resolve<Crisis> {

    constructor(private crisisService: CrisisService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Crisis> | boolean {
        let id = route.params['id'];
        return this.crisisService.getCrisis(id).then(crisis => {
            if (crisis) {
                return crisis;
            } else { // id not found
                this.router.navigate(['/crisis-center']);
                return false;
            }
        });
    }
}