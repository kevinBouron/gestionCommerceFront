import { Component, OnInit } from '@angular/core';
import { IClient } from '../ajouter-client/client';
import { ClientServiceService } from '../serviceClient/serviceClient.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {
  pageTitle:"Liste des clients"
  clients : IClient[]
  



  constructor(private clientService: ClientServiceService,
    private router: Router) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe( data => this.clients = data);
  }

  detailClient(codeClient : number): void {
    this.router.navigate(['/details/',codeClient]);
  }

  deleteClient(codeClient:number) : void {
    this.clientService.deleteClient(codeClient).subscribe(
      data => this.ngOnInit()
    );
  }


}
