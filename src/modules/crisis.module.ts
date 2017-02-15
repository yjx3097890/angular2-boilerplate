import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CrisisCenterComponent }  from '../components/crisisCenter/crisisCenter';
import { CrisisDetailComponent }  from '../components/crisisDetail/crisisDetail';
import { CrisisHomeComponent }  from '../components/crisisHome/crisisHome';
import { CrisisListComponent }  from '../components/crisisList/crisisList';
import { CrisisRoutingModule } from '../router/crisis';
import { CrisisService } from '../service/CrisisService';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisRoutingModule
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisDetailComponent,
        CrisisHomeComponent,
        CrisisListComponent
    ],
    providers: [
        CrisisService
    ]
})
export class CrisisModule {}