import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../core/models/voiture';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent {
  voiture: Voiture={
    id: "0",
    modele: "",
    marque: "",
    couleur: "",
    prix: 0,
  }
  updateVoitureForm!: FormGroup
  id!: string
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private voitureService: VoitureService){}
  ngOnInit(): void {
    console.log("update voiture");
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log("id", this.id);
    

  

    this.voitureService.findVoitureById(this.id).subscribe((data)=>{
      this.voiture = data;
      console.log("update", data);

      this.updateVoitureForm = new FormGroup({
        modele: new FormControl(this.voiture.modele, [Validators.required, Validators.minLength(3)]),
        marque: new FormControl(this.voiture.marque, Validators.required),
        couleur: new FormControl(this.voiture.couleur, Validators.required),
        prix: new FormControl(this.voiture.prix, Validators.required),
      });
    });
  }

  get modele(){return this.updateVoitureForm.get('modele')}
  get marque(){return this.updateVoitureForm.get('marque')}
  get couleur(){return this.updateVoitureForm.get('couleur')}
  get prix(){return this.updateVoitureForm.get('prix')}

  updateVoiture(){
    console.log(this.updateVoitureForm.value);
    this.voitureService.updateVoiture(this.id, this.updateVoitureForm.value).subscribe(()=>{
      console.log("Voiture Updated !");
      this.router.navigateByUrl('/voiture')
    })
  }
}
