/**
 * Created by apple on 16/5/14.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import  Hero from '../../models/Hero';
import {HeroService} from '../../service/HeroService';


@Component({
    moduleId: String(module.id),
    selector: 'hero-list',
    templateUrl: './heroList.html',
    styleUrls: ['./heroList.css']
})
export class HeroListComponent implements OnInit{

    title = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getMockHeroes().then(heroes => this.heroes = heroes);
    }

    addHero(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    deleteHero(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

    gotoDetail(): void {
        this.router.navigate(['/hero', this.selectedHero.id]);
    }
}
