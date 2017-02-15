import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from '../components/app/app';
import { AuthModule }  from './auth.module';
import { AppRoutingModule }     from '../router/app';
import { HeroModule }         from './hero.module';
import { CrisisModule } from './crisis.module';
import { DialogService } from '../service/DialogService';
import { AdminModule } from './admin.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule,
      HeroModule, CrisisModule, AdminModule, AuthModule],
  declarations: [ AppComponent ],
  providers: [DialogService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
