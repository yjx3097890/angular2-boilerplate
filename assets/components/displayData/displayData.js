/**
 * Created by apple on 15/9/24.
 */
import 'nm/reflect-metadata/Reflect.js';
import 'nm/zone.js/lib/zone.js';
import 'nm/es6-shim';
import { Component, View, bootstrap,NgFor} from 'nm/angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    template: `
        <p>My name: {{ myName }}</p>
        <p>Friends:</p>
        <ul>
            <li *ng-for="#name of names">
                {{ name }}
            </li>
        </ul>
    `,
    directives: [NgFor]
})

class MyAppNgForComponent {

    constructor() {
        this.myName = "Alice";
        this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
}

export {MyAppNgForComponent};