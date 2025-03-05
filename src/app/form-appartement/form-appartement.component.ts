import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppartementComponent } from '../appartement/appartement.component';
import { Appartement } from '../core/models/appartement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html',
  styleUrls: ['./form-appartement.component.css']
})


export class FormAppartementComponent {
  constructor(private activatedRoute: ActivatedRoute){
    
  }
  id: number = 0;
  appartForm!: FormGroup;
  appart: Appartement={
    appartNumber: 0,
    floor: 0,
    surface: 0,
    terrace: false,
    surfaceterrace: 0,
    category: "",
    ResidenceId: 0
  }
  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.appartForm = new FormGroup({
      appartNumber: new FormControl(this.id, [Validators.required, Validators.min(1)]),
      floor: new FormControl(this.appart.floor, [Validators.required, Validators.min(0)]),
      surface: new FormControl(this.appart.surface, [Validators.required, Validators.min(1)]),
      terrace: new FormControl(this.appart.terrace, [Validators.required]),
      surfaceterrace: new FormControl(this.appart.surfaceterrace),
      category: new FormControl(this.appart.category, [Validators.required, Validators.minLength(3)]),
      ResidenceId: new FormControl(this.appart.ResidenceId, [Validators.required, Validators.min(1)])
    })
  }
  get appartNumber(){
    return this.appartForm.get('appartNumber');
  }
  get floor(){
    return this.appartForm.get('floor');
  }
  get surface(){
    return this.appartForm.get('surface');
  }
  get terrace(){
    return this.appartForm.get('terrace');
  }
  get surfaceterrace(){
    return this.appartForm.get('surfaceterrace');
  }
  get category(){
    return this.appartForm.get('category');
  }
  get ResidenceId(){
    return this.appartForm.get('ResidenceId');
  }
  onSubmit() {
    console.log(this.appartForm.value);
  }
  
}
