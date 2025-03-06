import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute, private produitService: ProduitService){}
    
    id!: any;
    concernedProduit: any;
    ngOnInit(){
      this.id = this.activatedRoute.snapshot.params['id'];
      console.log(this.id);
      this.produitService.findProduitById(this.id).subscribe((data)=>{
        this.concernedProduit = data;
      });
    }
}
