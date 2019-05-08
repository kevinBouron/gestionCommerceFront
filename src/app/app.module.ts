import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RoutModule } from './rout/rout.module';

import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';

import { NewOrdreCoupeComponent } from './new-ordre-coupe/new-ordre-coupe.component';
import { ListeOrdreCoupeComponent } from './liste-ordre-coupe/liste-ordre-coupe.component';

import { Accueil } from './accueil';
import { Mdpoublie } from './mdpOublie';






import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReglementComponent } from './reglement/reglement.component';
import { ReglementService } from './reglement.service';
import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    Accueil,
    Mdpoublie
    NewOrdreCoupeComponent,
    ListeOrdreCoupeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'accueil', component : Accueil },
      { path : 'mdpOublie', component : Mdpoublie },
      { path : '', redirectTo : 'welcome', pathMatch : 'full'},
      { path : '**', redirectTo : 'welcome' }
    ])

  ],

  providers: [ ReglementService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
