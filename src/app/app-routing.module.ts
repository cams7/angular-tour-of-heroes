import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'heroes',
    loadChildren: './hero/hero.module#HeroModule'
  },
  {
    path: 'dashboard',
    loadChildren: './home/home.module#HomeModule'
  }  
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
export class AppRoutingModule { }
