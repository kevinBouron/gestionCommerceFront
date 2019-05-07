import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { ListeClientsComponent } from '../liste-clients/liste-clients.component';
import { AjouterClientComponent } from '../ajouter-client/ajouter-client.component';
import { DetailClientComponent } from '../detail-client/detail-client.component';
const appRoutes: Routes = [
  {path : 'clients', component : ListeClientsComponent},
  {path : 'nouveauClient', component : AjouterClientComponent},
  {path :'details/:codeClient', component : DetailClientComponent},
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