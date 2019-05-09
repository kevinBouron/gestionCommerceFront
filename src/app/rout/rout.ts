import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { DetailReglementComponent } from '../detail-reglement/detail-reglement.component';
import { ReglementComponent } from '../reglement/reglement.component';
const appRoutes: Routes = [
 ,
 

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class RoutModule { }