import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HeroDetailComponent }  from '../components/heroDetail/heroDetail';
import { HeroListComponent }  from '../components/heroList/heroList';

const routes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule {}