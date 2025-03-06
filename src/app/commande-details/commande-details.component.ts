import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute, private commandeService: CommandeService){}
    
    id!: any;
    concernedCommande: any;
    ngOnInit(){
      this.id = this.activatedRoute.snapshot.params['id'];
      this.commandeService.findCommandeById(this.id).subscribe((data)=>{
        this.concernedCommande = data;
      });
    }
}
