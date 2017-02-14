import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from '../components/app/app.component';
import { HeroDetailComponent }  from '../components/heroDetail/heroDetail';
import { HeroListComponent }  from '../components/heroList/heroList';
import { HeroSearchComponent }  from '../components/heroSearch/heroSearch';
import {HeroService} from '../service/HeroService';
import { RoutingModule }     from '../router/routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
   RoutingModule, HttpModule],
  declarations: [ AppComponent, HeroDetailComponent, HeroListComponent, HeroSearchComponent ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
