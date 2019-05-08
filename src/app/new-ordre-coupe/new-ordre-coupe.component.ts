import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/IProduit';
import {OrdreCoupeServiceService} from '../ordre-coupe-service.service';

@Component({
  selector: 'app-new-ordre-coupe',
  templateUrl: './new-ordre-coupe.component.html',
  styleUrls: ['./new-ordre-coupe.component.css']
})
export class NewOrdreCoupeComponent implements OnInit {

  contact : Produit = {code:0,fabricant:"",taille:"",couleur:"",modele:"",prix:null,quantite:null}

  constructor() { }

  ngOnInit() {
  }

  onclick(){
  }

  saveContact() : void {
    this.ordreCoupe.saveContact(this.contact).subscribe(
      data => this.router.navigate(['/commandes'])
    );
  }
}
