import { Component, OnInit } from '@angular/core';
import { ReglementService } from '../reglement.service';
import { Reglement } from '../shared/IReglement';
import { Router } from '@angular/router';
import { IFacture } from '../shared/IFacture';
import { FactureServiceService } from '../facture/facture-service.service';

@Component({
  selector: 'app-reglement',
  templateUrl: './reglement.component.html',
  styleUrls: ['./reglement.component.css']
})
export class ReglementComponent implements OnInit {

  width:any;
  reglements : Reglement[];
  reglement : Reglement = {id:0,montant:0,date:null,modePaiement:"",numPiece:0}
  router: any;

  facture: IFacture;

  constructor(private reglementService : ReglementService,
    private factureService : FactureServiceService) { }

 

  ngOnInit() {
    this.reglementService.getAllReglements().subscribe( data => this.reglements = data);
    this.width= this.facture.progression;
  }

  deleteContact(id: number) : void {
    this.reglementService.deletePaiement(id).subscribe(
      data => this.ngOnInit()
    );
  }

  saveContact() : void {
    this.reglementService.savePaiement(this.reglement).subscribe(
      data => this.router.navigate(['/reglement'])
    );
  }

 

    getReglement(id : number): void {
      this.router.navigate(['/detailReglement/',id]);
    }

    home(): void {
      this.router.navigate(['/home/']);
    }

    factureRedirect(): void {
      this.router.navigate(['/facture/']);
    }

    listeFacture(): void {
      this.router.navigate(['/facture/']);
    }

    reglementRedirect(): void {
      this.router.navigate(['/reglement/']);
    }

  }
