import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent }  from '../components/crisisCenter/crisisCenter';
import { CrisisDetailComponent }  from '../components/crisisDetail/crisisDetail';
import { CrisisHomeComponent }  from '../components/crisisHome/crisisHome';
import { CrisisListComponent }  from '../components/crisisList/crisisList';
import { CanDeactivateGuardService } from '../service/CanDeactiveGuardService';
import { DetailResolveService } from '../service/DetailResolveService';

const crisisRoutes: Routes = [
    {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
    },
    {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
            {
                path: '',
                component: CrisisListComponent,
                children: [
                    {
                        path: ':id',
                        component: CrisisDetailComponent,
                        canDeactivate: [CanDeactivateGuardService],
                        resolve: {
                            crisis: DetailResolveService
                        }
                    },
                    {
                        path: '',
                        component: CrisisHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(crisisRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [  CanDeactivateGuardService, DetailResolveService ]
})
export class CrisisRoutingModule { }