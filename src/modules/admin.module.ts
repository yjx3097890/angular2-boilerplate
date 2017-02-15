import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AdminDashboardComponent }  from '../components/adminDashboard/adminDashboard';
import { AdminComponent }  from '../components/admin/admin';
import { CrisisManageComponent }  from '../components/crisisManage/crisisManage';
import { AdminRoutingModule } from '../router/admin';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [
       AdminComponent,
        AdminDashboardComponent,
        CrisisManageComponent
    ],
    providers: [
    ]
})
export class AdminModule {}