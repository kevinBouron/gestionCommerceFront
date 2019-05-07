import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RoutModule } from './rout/rout.module';

import { AppComponent } from './app.component';
import { NewOrdreCoupeComponent } from './new-ordre-coupe/new-ordre-coupe.component';
import { ListeOrdreCoupeComponent } from './liste-ordre-coupe/liste-ordre-coupe.component';

@NgModule({
  declarations: [
    AppComponent,
    NewOrdreCoupeComponent,
    ListeOrdreCoupeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
