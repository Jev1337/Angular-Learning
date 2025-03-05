import { Component } from '@angular/core';
import { Voiture } from '../core/models/voiture';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent {
voiture: Voiture={
    id: "0",
    marque: "",
    modele: "",
    couleur: "",
    prix: 200
  };  
  addVoitureForm!: FormGroup
  constructor(private voitureService: VoitureService, private router: Router) {
  }
  ngOnInit(){
    this.addVoitureForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      marque: new FormControl('', [Validators.required]),
      modele: new FormControl('', [Validators.required]),
      couleur: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required])
    })
  }
  get id(){
    return this.addVoitureForm.get('id');
  }
  get modele(){
    return this.addVoitureForm.get('modele');
  }
  get marque(){
    return this.addVoitureForm.get('marque');
  }
  get couleur(){
    return this.addVoitureForm.get('couleur');
  }
  get prix(){
    return this.addVoitureForm.get('prix');
  }
  addVoiture(){
    console.log(this.voiture);
    this.voitureService.addVoiture(this.addVoitureForm.value).subscribe(()=>{
      console.log("Voiture Added !");
      this.router.navigateByUrl('/voiture')
    })
  }
}
