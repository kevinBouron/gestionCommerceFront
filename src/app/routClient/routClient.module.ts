import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { ListeClientsComponent } from '../liste-clients/liste-clients.component';
import { AjouterClientComponent } from '../ajouter-client/ajouter-client.component';
import { DetailClientComponent } from '../detail-client/detail-client.component';
import { ReglementComponent } from '../reglement/reglement.component';
import { DetailReglementComponent } from '../detail-reglement/detail-reglement.component';
import { NewFactureComponent } from '../facture/facture-ajout.component';
import { FactureListComponent } from '../facture/facture-list.component';
import { NewOrdreCoupeComponent } from '../new-ordre-coupe/new-ordre-coupe.component';
import { ListeOrdreCoupeComponent } from '../liste-ordre-coupe/liste-ordre-coupe.component';
const appRoutes: Routes = [
  {path : 'clients', component : ListeClientsComponent},
  {path : 'nouveauClient', component : AjouterClientComponent},
  {path :'details/:codeClient', component : DetailClientComponent},
  { path : 'detailReglement', component : DetailReglementComponent},
  { path : 'reglement', component : ReglementComponent},
  {path: 'newFacture', component:NewFactureComponent},
  {path : 'listF' ,component: FactureListComponent},
  {path:'newComm', component: NewOrdreCoupeComponent},
  {path : 'listeComm', component : ListeOrdreCoupeComponent}

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