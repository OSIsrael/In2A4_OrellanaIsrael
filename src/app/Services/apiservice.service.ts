
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  
  private apiUrl = 'https://pokeapi.co/api/v2/';


  constructor(private http: HttpClient) { }

  getItemByID(id: number): Observable<any> {
 
    return this.http.get(this.apiUrl+"item/"+id);
  }

  getItemByName(name: string): Observable<any> {
   
    return this.http.get(this.apiUrl+"item/"+name);
  }
}