import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  
  constructor(private activatedRoute: ActivatedRoute, private residenceService: ResidenceService){}
    
    id!: any;
    concernedResidence: any;
    ngOnInit(){
      this.id = this.activatedRoute.snapshot.params['id'];
      this.residenceService.findResidenceById(this.id).subscribe((data)=>{
        this.concernedResidence = data;
      });
    }
}
