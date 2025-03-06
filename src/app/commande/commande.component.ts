import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Commande } from '../core/models/commande';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {
  listCommandes: Commande[] = [];
  
    constructor(private modalService: NgbModal, private commandeService: CommandeService) {
  
    }
    total: number[] = [];
    selectedCommande: any;
    favourites: string[] = [];
    searchTerm: string = '';
    filteredCommandes: Commande[] = [];
  
    ngOnInit(): void {
      this.commandeService.findAllCommande().subscribe(commandes => {
        this.listCommandes = commandes;
        this.filteredCommandes = this.listCommandes;
      });
      const storedFavourites = localStorage.getItem('favourites');
      if (storedFavourites) {
        this.favourites = JSON.parse(storedFavourites);
      }
    }
  
    openModal(commande: any): void {
      this.selectedCommande = commande;
    }
  
    closeModal(): void {
      this.modalService.dismissAll();
    }
  
    isFav(name: string): boolean {
      return this.favourites.includes(name);
    }
    
    toggleFavourites(name: string): void {
      if (this.isFav(name)) {
        this.favourites = this.favourites.filter(f => f !== name);
      } else {
        this.favourites.push(name);
      }
      localStorage.setItem('favourites', JSON.stringify(this.favourites));
    }
    
    onSearch(): void {
      this.filteredCommandes = this.listCommandes.filter(r =>
        r.id.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  
    deleteCommande(id: number): void {
      this.commandeService.deleteCommande(id).subscribe(commande => {
        this.listCommandes = this.listCommandes.filter(r => r.id !== id);
        this.filteredCommandes = this.filteredCommandes.filter(r => r.id !== id);
      });
      
    } 
    calculateTotal(id : number){
      this.commandeService.findCommandeById(id).subscribe((data)=>{
        this.total[id] = 0;
        for(let i = 0; i < data.items.length; i++){
          this.total[id] += data.items[i].price;
        }
      });
    }
}
