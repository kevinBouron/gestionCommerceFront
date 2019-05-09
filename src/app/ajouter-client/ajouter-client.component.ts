import { Component, OnInit } from '@angular/core';
import { IClient } from './client';
import { ClientServiceService } from '../serviceClient/serviceClient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  pageTitle = 'Ajouter un nouveau client';
  client : IClient = {codeClient:0, nomClient:"",prenomClient:"",dateNaissance:null,adresse:"",societe:"",telMobile:"",fax:"",telFixe:"",email:""}

  constructor(private clientService : ClientServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  saveContact() : void {
    this.clientService.saveClient(this.client).subscribe(
      data => this.router.navigate(['/clients'])
    );
  }
}
