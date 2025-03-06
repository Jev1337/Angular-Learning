import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../core/models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) {
        
    }
  
  
    url: string = 'http://localhost:3000/produit/';
  
    addProduit(produit: Produit): Observable<Produit>{
      return this.http.post<Produit>(this.url, produit);
    }
  
    deleteProduit(id: number): Observable<Produit>{
      return this.http.delete<Produit>(this.url + id);
    }
  
    updateProduit(id: number, produit: Produit): Observable<Produit>{
      return this.http.put<Produit>(this.url + id, produit);
    }
  
    findAllProduit(): Observable<[Produit]>{
      console.log(this.http.get<[Produit]>(this.url));
      return this.http.get<[Produit]>(this.url);
    }
  
    findProduitById(id: number): Observable<Produit>{
      return this.http.get<Produit>(this.url + id);
    }
}
