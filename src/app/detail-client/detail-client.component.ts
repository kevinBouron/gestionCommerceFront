import { Component, OnInit } from '@angular/core';
import { IClient } from '../ajouter-client/client';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientServiceService } from '../serviceClient/serviceClient.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  pageTitle= 'Détails du client'
  client : IClient;
  codeClient: number;
  

  constructor(private clientService: ClientServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.codeClient = this.route.snapshot.params['codeClient'];
    this.clientService.getClient(this.codeClient).subscribe(
      data => this.client = data
    );
  }
  

  
}
