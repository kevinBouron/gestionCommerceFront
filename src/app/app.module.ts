import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { Accueil } from './accueil';
import { Mdpoublie } from './mdpOublie';






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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
