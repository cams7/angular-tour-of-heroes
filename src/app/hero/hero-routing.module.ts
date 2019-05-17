import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [ 
  { path: 'heroes', component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ 
    RouterModule 
  ]
})
export class HeroRoutingModule { }
