import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

interface learningData{
  titulo: string,
  institucion: string,
  anios: string
}

@Component({
  selector: 'app-learning',
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss'
})
export class LearningComponent {
  learn: learningData[] = [
    {titulo: "Tecnólogo en Desarrollo de Software",institucion: "Escuela Politécnica Nacional", anios: "2021-2024"},
    {titulo: "Bachiller Técnico en Informática", institucion: "Institución Educativa Fiscal 'Cinco de Junio'", anios:"2021"}
  ]

}
