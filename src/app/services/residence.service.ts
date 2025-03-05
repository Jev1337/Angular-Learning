import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) {
      
  }


  url: string = 'http://localhost:3000/residence/';

  addResidence(residence: Residence): Observable<Residence>{
    return this.http.post<Residence>(this.url, residence);
  }

  deleteResidence(id: string): Observable<Residence>{
    return this.http.delete<Residence>(this.url + id);
  }

  updateResidence(id: string, residence: Residence): Observable<Residence>{
    return this.http.put<Residence>(this.url + id, residence);
  }

  findAllResidence(): Observable<[Residence]>{
    console.log(this.http.get<[Residence]>(this.url));
    return this.http.get<[Residence]>(this.url);
  }

  findResidenceById(id: string): Observable<Residence>{
    return this.http.get<Residence>(this.url + id);
  }
}
