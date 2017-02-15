import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent }  from '../components/heroDetail/heroDetail';
import { HeroListComponent }  from '../components/heroList/heroList';

const heroesRoutes: Routes = [
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule { }