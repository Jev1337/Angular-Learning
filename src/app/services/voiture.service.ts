import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../core/models/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) {
      
  }


  url: string = 'http://localhost:3000/voiture/';

  addVoiture(voiture: Voiture): Observable<Voiture>{
    return this.http.post<Voiture>(this.url, voiture);
  }

  deleteVoiture(id: string): Observable<Voiture>{
    return this.http.delete<Voiture>(this.url + id);
  }

  updateVoiture(id: string, voiture: Voiture): Observable<Voiture>{
    return this.http.put<Voiture>(this.url + id, voiture);
  }

  findAllVoiture(): Observable<[Voiture]>{
    console.log(this.http.get<[Voiture]>(this.url));
    return this.http.get<[Voiture]>(this.url);
  }

  findVoitureById(id: string): Observable<Voiture>{
    return this.http.get<Voiture>(this.url + id);
  }
}
