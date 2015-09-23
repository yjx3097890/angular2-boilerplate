/**
 * Created by apple on 15/9/14.
 */

import {MyAppComponent} from "./components/hello/hello.js";

import {HelloTemplateComponent} from "./components/helloTemplate/helloTemplate.js";

import {MyAppNgForComponent} from "./components/displayData/displayData.js";

import {Component, View, bootstrap} from 'nm/angular2/angular2';

//bootstrap(MyAppComponent);//渲染自定义控件

//bootstrap(HelloTemplateComponent);//渲染自定义的加载自模板的控件

bootstrap(MyAppNgForComponent);//渲染自定义的ngFor模块