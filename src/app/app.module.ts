import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReglementComponent } from './reglement/reglement.component';
import { ReglementService } from './reglement.service';
import {  HttpClientModule } from '@angular/common/http';
import { DetailReglementComponent } from './detail-reglement/detail-reglement.component';



@NgModule({
  declarations: [
    AppComponent,
    ReglementComponent,
    DetailReglementComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ReglementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
