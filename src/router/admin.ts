import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }  from '../components/admin/admin';
import { AdminDashboardComponent }  from '../components/adminDashboard/adminDashboard';
import { CrisisManageComponent }  from '../components/crisisManage/crisisManage';
import { AuthGuardService } from '../service/AuthGuardService';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuardService],
                children: [
                    { path: 'crises', component: CrisisManageComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}