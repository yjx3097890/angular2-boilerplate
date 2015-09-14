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

var template = require("./helloTemplate.html");

@Component({
    selector: 'my-app'
})
@View({
    template: template
})
class HelloTemplateComponent {
    constructor() {
        this.name = 'World';
        console.log(template);
    }
}

bootstrap(HelloTemplateComponent);/**
 * Created by apple on 15/9/14.
 */
