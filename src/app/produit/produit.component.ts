import { Component } from '@angular/core';
import { Produit } from '../core/models/produit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  listProduits: Produit[] = [];
  
    constructor(private modalService: NgbModal, private produitService: ProduitService) {
  
    }
    selectedProduit: any;
    favourites: string[] = [];
    searchTerm: string = '';
    filteredProduits: Produit[] = [];
  
    ngOnInit(): void {
      this.produitService.findAllProduit().subscribe(produits => {
        this.listProduits = produits;
        this.filteredProduits = this.listProduits;
      });
      const storedFavourites = localStorage.getItem('favourites');
      if (storedFavourites) {
        this.favourites = JSON.parse(storedFavourites);
      }
    }
  
    openModal(produit: any): void {
      this.selectedProduit = produit;
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
      this.filteredProduits = this.listProduits.filter(r =>
        r.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  
    deleteProduit(id: number): void {
      this.produitService.deleteProduit(id).subscribe(produit => {
        this.listProduits = this.listProduits.filter(r => r.id !== id);
        this.filteredProduits = this.filteredProduits.filter(r => r.id !== id);
      });
      
    } 
}
