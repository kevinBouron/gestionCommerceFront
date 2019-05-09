import { Component, OnInit } from '@angular/core';
import { IFacture } from '../shared/IFacture';
import { FactureServiceService } from './facture-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  facture : IFacture;
  numero: number;
  constructor(private factureService: FactureServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.numero = this.route.snapshot.params['numero'];
    this.factureService.getFacture(this.numero).subscribe(
      data => this.facture = data
    );
  }

}