/**
 * Created by apple on 15/9/14.
 */
import 'nm/reflect-metadata/Reflect.js';
import 'nm/zone.js/lib/zone.js';
import 'nm/es6-shim';
import { Component, View, bootstrap } from 'nm/angular2/angular2';
// import './node_modules/angular/angular.min';
// import angular from './node_modules/angular2/angular2'
// import {AsModule, Component, Service, View, bootstrap} from './node_modules/a1atscript/dist/a1atscript.bundle';

// @AsModule('testapp', [])

@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
class MyAppComponent {

    name: string;

    constructor() {
        this.name = 'World';
    }
}

export {MyAppComponent};