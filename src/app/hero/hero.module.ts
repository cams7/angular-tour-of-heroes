import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './../in-memory-data.service';

import { HeroRoutingModule } from './hero-routing.module';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [    
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HeroRoutingModule
  ],
  providers: [
    HeroService
  ],
  exports: [
    HeroSearchComponent
  ]
})
export class HeroModule { }
