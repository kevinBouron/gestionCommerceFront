import { Component, OnInit } from '@angular/core';
import { FactureServiceService } from '../facture/facture-service.service';
import { Router } from '@angular/router';
import { IFacture } from '../shared/IFacture';

@Component({
  selector: 'app-new-facture',
  templateUrl: './facture-ajout.component.html',
  
})
export class NewFactureComponent implements OnInit {

  facture : IFacture;
  constructor(private factureService : FactureServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  saveContact() : void {
    this.factureService.saveFacture(this.facture).subscribe(
      data => this.router.navigate(['/factures'])
    );
  }
}