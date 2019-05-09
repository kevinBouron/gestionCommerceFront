import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { RoutModule } from './routClient/routClient.module';
import { ClientServiceService } from './serviceClient/serviceClient.service';
import { NewOrdreCoupeComponent } from './new-ordre-coupe/new-ordre-coupe.component';
import { ListeOrdreCoupeComponent } from './liste-ordre-coupe/liste-ordre-coupe.component';
import { Accueil } from './accueil';
import { Mdpoublie } from './mdpOublie';
import { AppComponent } from './app.component';
import { ReglementComponent } from './reglement/reglement.component';
import { ReglementService } from './reglement.service';

import { DetailReglementComponent } from './detail-reglement/detail-reglement.component';

import { MenuListComponent } from './menu-list/menu-list.component';





@NgModule({
  declarations: [
    ListeClientsComponent,
    DetailClientComponent,
    AjouterClientComponent,
    ModifierClientComponent,
    Accueil,
    Mdpoublie,
    NewOrdreCoupeComponent,
    ListeOrdreCoupeComponent,
    MenuListComponent,
    ReglementComponent,
    DetailReglementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutModule,
    FormsModule
  ],
  providers: [ ReglementService, 
          ClientServiceService,
             ReglementService],

  bootstrap : [AppComponent],

})
export class AppModule { }
