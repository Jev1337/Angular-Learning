import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../core/models/commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) {
          
      }
    
    
      url: string = 'http://localhost:3000/commande/';
    
      addCommande(commande: Commande): Observable<Commande>{
        return this.http.post<Commande>(this.url, commande);
      }
    
      deleteCommande(id: number): Observable<Commande>{
        return this.http.delete<Commande>(this.url + id);
      }
    
      updateCommande(id: number, commande: Commande): Observable<Commande>{
        return this.http.put<Commande>(this.url + id, commande);
      }
    
      findAllCommande(): Observable<[Commande]>{
        console.log(this.http.get<[Commande]>(this.url));
        return this.http.get<[Commande]>(this.url);
      }
    
      findCommandeById(id: number): Observable<Commande>{
        return this.http.get<Commande>(this.url + id);
      }
}
