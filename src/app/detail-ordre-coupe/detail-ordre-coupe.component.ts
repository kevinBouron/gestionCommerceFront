import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/ICommande';
import {OrdreCoupeServiceService} from '../ordre-coupe-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-ordre-coupe',
  templateUrl: './detail-ordre-coupe.component.html',
  styleUrls: ['./detail-ordre-coupe.component.css']
})
export class DetailOrdreCoupeComponent implements OnInit {

  commande : Commande;
  id: number;
  constructor(private OrdreCoupeService: OrdreCoupeServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.OrdreCoupeService.getCommande(this.id).subscribe(
      data => this.commande = data
    );
  }

}
