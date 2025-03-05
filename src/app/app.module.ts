import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { AppartementComponent } from './appartement/appartement.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ResidenceComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    FormAppartementComponent,
    AppartementComponent,
    UpdateResidenceComponent,
  ],
  imports: [
    BrowserModule,
    AnnonceModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
