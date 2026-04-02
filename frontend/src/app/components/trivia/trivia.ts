import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaService, Pregunta } from '../../services/trivia';

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivia.html',
  styleUrl: './trivia.css'
})
export class TriviaComponent implements OnInit {
  preguntas: Pregunta[] = [];
  cargando = true;
  error = '';

  constructor(private triviaService: TriviaService) {}

  ngOnInit(): void {
    this.triviaService.getPreguntas(10).subscribe({
      next: (data) => {
        this.preguntas = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'Error al cargar las preguntas';
        this.cargando = false;
      }
    });
  }

  getDificultadColor(dificultad: string): string {
    const colores: any = {
      easy: 'badge-easy',
      medium: 'badge-medium',
      hard: 'badge-hard'
    };
    return colores[dificultad] || '';
  }
}