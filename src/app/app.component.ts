/**
 * Created by apple on 16/5/14.
 */
import {Component} from "@angular/core";


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})
export class AppComponent {

    title = 'Tour of Heroes';
    myHero = 'Windstorm';
}
