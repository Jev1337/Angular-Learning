import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residence: Residence={
    id: "0",
    name: "",
    address: "",
    image: "",
    status: ""
  };  
  addResidenceForm!: FormGroup
  constructor(private residenceService: ResidenceService, private router: Router) {
  }
  ngOnInit(){
    this.addResidenceForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
      
    })
  }
  get id(){
    return this.addResidenceForm.get('id');
  }
  get name(){
    return this.addResidenceForm.get('name');
  }
  get address(){
    return this.addResidenceForm.get('address');
  }
  get image(){
    return this.addResidenceForm.get('image');
  }
  get status(){
    return this.addResidenceForm.get('status');
  }
  addResidence(){
    console.log(this.residence);
    if (this.addResidenceForm.valid) {
      this.residenceService.addResidence(this.addResidenceForm.value).subscribe(()=>{
        console.log("Residence Added !");
        this.router.navigateByUrl('/residence')
      })
    }
  }

}

