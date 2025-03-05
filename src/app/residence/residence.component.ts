import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  listResidences: Residence[] = [];

  constructor(private modalService: NgbModal, private residenceService: ResidenceService) {

  }
  selectedResidence: any;
  favourites: string[] = [];
  searchTerm: string = '';
  filteredResidences: Residence[] = [];

  ngOnInit(): void {
    this.residenceService.findAllResidence().subscribe(residences => {
      this.listResidences = residences;
      this.filteredResidences = this.listResidences;
    });
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      this.favourites = JSON.parse(storedFavourites);
    }
  }

  openModal(residence: any): void {
    this.selectedResidence = residence;
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
    this.filteredResidences = this.listResidences.filter(r =>
      r.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteResidence(id: string): void {
    this.residenceService.deleteResidence(id).subscribe(residence => {
      this.listResidences = this.listResidences.filter(r => r.id !== id);
      this.filteredResidences = this.filteredResidences.filter(r => r.id !== id);
    });
    
  } 
}
