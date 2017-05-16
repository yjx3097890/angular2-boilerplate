import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


import { HeroService } from '../../service/HeroService';
import  Hero  from '../../models/Hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'heroSearch.html',
    styleUrls: [ 'heroSearch.css' ],
    providers: [HeroService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;

    private searchTerms = new Subject<string>();

    constructor(
        private HeroService: HeroService,
        private router: Router
    ) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.HeroService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/hero', hero.id];
        this.router.navigate(link);
    }
}