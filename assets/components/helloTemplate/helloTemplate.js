/**
 * Created by apple on 15/9/14.
 */
import 'nm/reflect-metadata/Reflect.js';
import 'nm/zone.js/lib/zone.js';
import 'nm/es6-shim';
import { Component, View, bootstrap } from 'nm/angular2/angular2';

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
    }
}

export {HelloTemplateComponent}
