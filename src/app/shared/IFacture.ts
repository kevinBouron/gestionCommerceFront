export interface IFacture {
    numero : number;
    codeFacture : string;
    codeClient : string;

    numeroCommande : number;
    dateCommande : string;

    modePaiement: string;
    statut : string;

    numTVA : number;
    dateLivraison : string;
    tauxR : number;
    remise : number;
    progression : number;
    fraisdeport : number;
    tva : number;
    BaseHT: number;
    totalHT: number;
    montantTVA : number;
    montantTTC : number;
    accompte : number;
    prixUnitaire : number;
    dateecheance : string;
    montantecheance : number;
    restedu : number;
}