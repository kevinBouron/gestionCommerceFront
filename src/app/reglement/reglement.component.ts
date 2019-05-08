import { Component, OnInit } from '@angular/core';
import { ReglementService } from '../reglement.service';
import { Reglement } from '../shared/IReglement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reglement',
  templateUrl: './reglement.component.html',
  styleUrls: ['./reglement.component.css']
})
export class ReglementComponent implements OnInit {

  reglements : Reglement[];
  reglement : Reglement = {id:0,montant:0,date:null,modePaiement:"",numeroPiece:0}
  router: any;
  constructor(private reglementService : ReglementService) { }

  ngOnInit() {
    this.reglementService.getAllContacts().subscribe( data => this.reglements = data);
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

}
