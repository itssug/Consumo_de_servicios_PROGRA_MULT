import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pokemon { //componente intermedio 
  id: number;
  nombre: string;
  imagen: string;
  tipos: string[];
  altura: number;
  peso: number;
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl = 'http://localhost:8000/api/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(limit: number = 20): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}?limit=${limit}`);
  }

  getDetalle(nombre: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${nombre}/`);
  }
}