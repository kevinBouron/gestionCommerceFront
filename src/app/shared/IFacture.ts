export interface Facture{
    numeroCommande : number;
    dateCommande: Date;
   
    numTVA: number;
	dateLivraison: Date;
	tauxR: number;
    remise: number;
    fraisdeport: number;

    tva: number;
	BaseHT: number;
    totalHT: number;
    
    montantTVA: number;
	montantTTC: number;
	accompte: number;
	progression: number;
	dateecheance: Date;
	montantecheance: number;
    restedu: number;
    codeFacture: number;
}


	
	
	
	
	
	
	
	