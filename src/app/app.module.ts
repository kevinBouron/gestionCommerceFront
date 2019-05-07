import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { RoutModule } from './routClient/routClient.module';
import { FormsModule } from '@angular/forms';
import { ClientServiceService } from './serviceClient/serviceClient.service';


@NgModule({
  declarations: [
    AppComponent,
    ListeClientsComponent,
    DetailClientComponent,
    AjouterClientComponent,
    ModifierClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutModule,
    FormsModule
  ],
  providers: [ClientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
