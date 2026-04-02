import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pregunta {
  pregunta: string;
  categoria: string;
  dificultad: string;
  respuesta_correcta: string;
  respuestas_incorrectas: string[];
}

@Injectable({ providedIn: 'root' })
export class TriviaService {
  private apiUrl = 'http://localhost:8000/api/trivia/';

  constructor(private http: HttpClient) {}

  getPreguntas(amount: number = 10): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(`${this.apiUrl}?amount=${amount}`);
  }
}