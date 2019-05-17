import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HeroRoutingModule } from './hero-routing.module';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [    
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  providers: [
  ],
  exports: [
    HeroSearchComponent
  ]
})
export class HeroModule { }
