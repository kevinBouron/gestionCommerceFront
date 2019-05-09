import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/ICommande';
import { OrdreCoupeServiceService } from '../ordre-coupe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-ordre-coupe',
  templateUrl: './liste-ordre-coupe.component.html',
  styles : ['thead{color:#337AB7}'],
  styleUrls: ['./liste-ordre-coupe.component.css']
})
export class ListeOrdreCoupeComponent implements OnInit {

  commande : Commande[];
  constructor(private OrdreCoupeService: OrdreCoupeServiceService,
              private router: Router) { }

  ngOnInit() {
    this.OrdreCoupeService.getAllCommande().subscribe( data => this.commande = data);
  }
  deleteCommande(id: number) : void {
    this.OrdreCoupeService.deleteCommande(id).subscribe(
      data => this.ngOnInit()
    );
  }

  updateCommande(commande: Commande) : void {
    this.OrdreCoupeService.updateCommande(commande).subscribe(
      data => this.ngOnInit()
    );
  }

  detailCommande(id : number): void {
    this.router.navigate(['/detail/',id]);
  }
}