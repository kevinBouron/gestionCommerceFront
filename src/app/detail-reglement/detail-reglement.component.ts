import { Component, OnInit } from '@angular/core';
import { ReglementService } from '../reglement.service';
import { Reglement } from '../shared/IReglement';

@Component({
  selector: 'app-detail-reglement',
  templateUrl: './detail-reglement.component.html',
  styleUrls: ['./detail-reglement.component.css']
})
export class DetailReglementComponent implements OnInit {

  reglement : Reglement;
  id: number;

  constructor(
    private reglementService : ReglementService) { }

  ngOnInit() {
  
  }

  getReglement(id : number) {
    this.reglementService.getReglement(id).subscribe(
        data => this.reglement = data
    );
}

}
