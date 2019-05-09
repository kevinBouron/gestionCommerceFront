import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/IProduit';
import { Commande } from '../shared/ICommande';
import {OrdreCoupeServiceService} from '../ordre-coupe-service.service';
import {ProduitServiceService} from '../produit-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ordre-coupe',
  templateUrl: './new-ordre-coupe.component.html',
  styleUrls: ['./new-ordre-coupe.component.css']
})
export class NewOrdreCoupeComponent implements OnInit {

  contact : Produit = {code:0,fabricant:"",taille:"",couleur:"",modele:"",prix:null,quantite:null};
  commande : Commande = {id:0,date:null,coupeEnBout:null,thermo:null,empDbl:null,thermoType:"",faconnier:"",societe:"",receptionneur:"",produits:null}

  constructor(private OrdreCoupeServiceService:OrdreCoupeServiceService,  private router: Router) { }

  ngOnInit() {
  }

  onclick() : void {
  
  }

  saveCommande() : void {
    this.OrdreCoupeServiceService.saveCommande(this.commande).subscribe(
      data => this.router.navigate(['/commandes'])
    );
  }

  annulerCommande(): void {
    this.router.navigate(['/accueil']);
  }

}
