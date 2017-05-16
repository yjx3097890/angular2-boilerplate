
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import  Hero from '../../models/Hero'
import { HeroService } from '../../service/HeroService';

@Component({
    selector: 'hero-detail',
    templateUrl: './heroDetail.html',
    styleUrls: ['./heroDetail.css']
})
export class HeroDetailComponent implements OnInit {


    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {

    }

    ngOnInit () {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    save(): void {
        this.heroService.update(this.hero)
            .subscribe(() => this.goBack());
    }

    goBack(): void {
       // this.location.back();
        this.router.navigate(['/heroes', { id: this.hero.id, foo: 'foo' }]);
    }

}
