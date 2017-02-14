
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


import  Hero from '../models/Hero'




@Injectable()
export class HeroService {

    private baseUrl = 'api/hero';

    constructor(
        private http: Http
    ) {
    }

    //demo only
    getMockHeroes(): Observable<Hero[]> {

        const HEROES: Hero[] = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return Observable.of<Hero[]>(HEROES);
    }


    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.baseUrl)
            .map((res: Response) => res.json() as Hero[]);
    }



    getHero(id: number): Observable<Hero> {
        return this.getMockHeroes()
            .map(heroes => heroes.find(hero => hero.id === id));
    }



    update(hero: Hero): Observable<Hero> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const url = `${this.baseUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .map((res: Response) => res.json() as Hero);
    }

    create(name: string): Observable<Hero> {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http
            .post(this.baseUrl, JSON.stringify({name: name}), {headers: headers})
            .map(res => res.json() as Hero);
    }

    del(id: number): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete(url, {headers: headers})
            .map(() => null);
    }

    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`${this.baseUrl}/?name=${term}`)
            .map((res: Response) => res.json().data as Hero[]);
    }


}