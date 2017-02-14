
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import  Hero from '../models/Hero'




@Injectable()
export class HeroService {

    private baseUrl = 'api/hero';

    constructor(
        private http: Http
    ) {
    }

    //demo only
    getMockHeroes(): Promise<Hero[]> {

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
        return Promise.resolve(HEROES);
    }


    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }



    getHero(id: number): Promise<Hero> {
        return this.getMockHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }



    update(hero: Hero): Promise<Hero> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const url = `${this.baseUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http
            .post(this.baseUrl, JSON.stringify({name: name}), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.baseUrl}/${id}`;
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`${this.baseUrl}/?name=${term}`)
            .map((r: Response) => r.json().data as Hero[]);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}