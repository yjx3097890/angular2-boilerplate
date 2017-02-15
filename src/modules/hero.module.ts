import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroDetailComponent }  from '../components/heroDetail/heroDetail';
import { HeroListComponent }  from '../components/heroList/heroList';
import { HeroSearchComponent }  from '../components/heroSearch/heroSearch';
import { HeroService } from '../service/HeroService';
import { HeroRoutingModule } from '../router/hero';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ]
})
export class HeroModule {}