import { Produit } from './IProduit';

export interface Commande {

    id : number;
    date: Date;
    coupeEnBout : boolean;
    thermo : boolean;
    empDbl : boolean;
    thermoType : string;
    faconnier: string;
    societe: string;
    receptionneur: string;
    produits : Produit
}