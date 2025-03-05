import { Component } from '@angular/core';
import { Voiture } from '../core/models/voiture';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  
  listVoitures: Voiture[] = [];

  constructor(private modalService: NgbModal, private voitureService: VoitureService) {

  }
  selectedVoiture: any;
  favourites: string[] = [];

  ngOnInit(): void {
    this.voitureService.findAllVoiture().subscribe(voitures => {
      this.listVoitures = voitures;
    });
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      this.favourites = JSON.parse(storedFavourites);
    }
  }

  openModal(voiture: any): void {
    this.selectedVoiture = voiture;
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
  

  deleteVoiture(id: string): void {
    this.voitureService.deleteVoiture(id).subscribe(voiture => {
      this.listVoitures = this.listVoitures.filter(r => r.id !== id);
    });
    
  } 
}
