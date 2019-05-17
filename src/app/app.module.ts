import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppCommonModule } from './common/app-common.module';
import { HeroModule } from './hero/hero.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    AppCommonModule,
    HeroModule,
    HomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
