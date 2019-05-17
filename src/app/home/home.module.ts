import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HeroModule } from '../hero/hero.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    HomeRoutingModule,
    HeroModule
  ]
})
export class HomeModule { }
