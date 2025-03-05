import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.css']
})
export class VoitureDetailsComponent {

    constructor(private activatedRoute: ActivatedRoute, private voitureService: VoitureService){}
      
      id!: any;
      concernedVoiture: any;
      ngOnInit(){
        this.id = this.activatedRoute.snapshot.params['id'];
        this.voitureService.findVoitureById(this.id).subscribe((data)=>{
          this.concernedVoiture = data;
        });
      }
}
