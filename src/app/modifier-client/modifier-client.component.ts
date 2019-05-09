import { Component, OnInit } from '@angular/core';
import { IClient } from '../ajouter-client/client';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {

  client : IClient = {codeClient:0, nomClient:"",prenomClient:"",dateNaissance:null,adresse:"",societe:"",telMobile:"",fax:"",telFixe:"",email:""}
  
  constructor() { }

  ngOnInit() {


    
  }

}
