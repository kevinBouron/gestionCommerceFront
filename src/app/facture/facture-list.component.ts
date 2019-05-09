import { OnInit, Component } from '@angular/core';
import { IFacture } from '../shared/IFacture';
import { FactureServiceService } from './facture-service.service';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-factures',
    templateUrl : './facture-list.component.html',
    styles : ['']
})
export class FactureListComponent implements OnInit {

    pageTitle = 'Liste des Factures';
    _filter : string;

    

    get filter(): string {
        return this._filter;
    }
    set filter(value : string) {
        this._filter = value;
        this.filteredFactures = this._filter ? this.performFilter(this._filter) : this.factures;
    }
    filteredFactures : IFacture[];
    factures : IFacture[];

    constructor(private factureService: FactureServiceService,
        private router: Router) {
        this.filter = '';
    }

    
    ngOnInit(): void {
        this.factureService.getAllFactures().subscribe( data => this.factures = data);  
    }

    performFilter(filterBy: string) : IFacture[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.factures.filter((facture : IFacture) => 
            facture.codeFacture.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    deleteContact(numero: number) : void {
        this.factureService.deleteFacture(numero).subscribe(
          data => this.ngOnInit()
        );
      }
    detailContact(numero : number): void {
        this.router.navigate(['/detail/',numero]
        );
      }  
}
