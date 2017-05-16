/**
 * Created by apple on 16/5/14.
 */
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { Observable } from 'rxjs';

import  Hero from '../../models/Hero';
import {HeroService} from '../../service/HeroService';


@Component({
    selector: 'hero-list', //没用。。
    templateUrl: './heroList.html',
    styleUrls: ['./heroList.css']
})
export class HeroListComponent implements OnInit{

    title = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero: Hero;
    selectedId: number;

    constructor(
        private heroService: HeroService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
       this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.getHeroes();

            }).subscribe(heroes => {
               this.heroes = heroes;
               this.selectedHero = heroes.find((hero)=> this.selectedId === hero.id);
           }, error =>
           // TODO: real error handling
           console.log(error)
       );
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }


    getHeroes(): Observable<Hero[]> {
        return this.heroService.getMockHeroes();
    }

    addHero(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .subscribe(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            },
                error =>
                    // TODO: real error handling
                    console.log(error));
    }

    deleteHero(hero: Hero): void {
        this.heroService
            .del(hero.id)
            .subscribe(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            },
                error =>
                    // TODO: real error handling
                    console.log(error));
    }

    gotoDetail(): void {
        this.router.navigate(['/hero', this.selectedHero.id]);
    }
}
