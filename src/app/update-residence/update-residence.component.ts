import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../core/models/residence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent implements OnInit{
residence: Residence={
  id: "0",
  name: "",
  address: "",
  status: "Disponible",
  image: "../../assets/images/R4.jpg",
}
updateResidenceForm!: FormGroup
id!: string
constructor(private router: Router, private activatedRoute: ActivatedRoute, private residenceService: ResidenceService){}
ngOnInit(): void {
  console.log("update residence");
  this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
  console.log("id", this.id);
  /*
  this.updateResidenceForm = new FormGroup({
    name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
    address: new FormControl(this.residence.address, Validators.required),
    status: new FormControl(this.residence.status, Validators.required),
    image: new FormControl(this.residence.image, Validators.required),
  }); */

  this.residenceService.findResidenceById(this.id).subscribe((data)=>{
    this.residence = data;
    console.log("update", data);

    this.updateResidenceForm = new FormGroup({
      name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
      address: new FormControl(this.residence.address, Validators.required),
      status: new FormControl(this.residence.status, Validators.required),
      image: new FormControl(this.residence.image, Validators.required),
    });
    /*
    this.updateResidenceForm.patchValue({
      name: this.residence.name,
      address: this.residence.address,
      status: this.residence.status,
      image: this.residence.image
    });
    */
  });
}

get name(){return this.updateResidenceForm.get('name')}
get address(){return this.updateResidenceForm.get('address')}
get status(){return this.updateResidenceForm.get('status')}
get image(){return this.updateResidenceForm.get('image')}

updateResidence(){
  console.log(this.updateResidenceForm.value);
  this.residenceService.updateResidence(this.id, this.updateResidenceForm.value).subscribe(()=>{
    console.log("Residence Updated !");
    this.router.navigateByUrl('/residence')
  })
}

}