import './node_modules/reflect-metadata/Reflect.js';
import './node_modules/zone/lib/zone.js';
import 'es6-shim';
import { Component, View, bootstrap } from './node_modules/angular2/angular2';
// import './node_modules/angular/angular.min';
// import angular from './node_modules/angular2/angular2'
// import {AsModule, Component, Service, View, bootstrap	} from './node_modules/a1atscript/dist/a1atscript.bundle';

// @AsModule('testapp', [])

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
class MyAppComponent {
  constructor() {
    this.name = 'Thote';
  }
}

bootstrap(MyAppComponent);