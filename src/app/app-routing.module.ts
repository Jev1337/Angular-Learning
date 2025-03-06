import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AppartementComponent } from './appartement/appartement.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandeDetailsComponent } from './commande-details/commande-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residence', component: ResidenceComponent },
  { path: 'residence/details/:id', component: ResidenceDetailsComponent },
  { path: 'residence/add', component: AddResidenceComponent },
  { path: 'appartement', component: AppartementComponent},
  { path: 'appartement/add/:id' , component: FormAppartementComponent},
  { path: 'residence/edit/:id', component: UpdateResidenceComponent},
  { path: 'produit/details/:id', component: ProduitDetailsComponent},
  { path: 'produit', component: ProduitComponent},
  { path: 'commande', component: CommandeComponent},
  { path: 'commande/details/:id', component: CommandeDetailsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }