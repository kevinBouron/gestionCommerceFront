import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'accueil', component : Accueil },
      { path : 'mdpOublie', component : Mdpoublie },
      { path : '', redirectTo : 'welcome', pathMatch : 'full'},
      { path : '**', redirectTo : 'welcome' }
    ])

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ ReglementService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
