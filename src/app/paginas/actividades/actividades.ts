import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividades.html',
  styleUrl: './actividades.css'
})
export class Actividades {
// Creamos los mocks
actividadesMock: any = {
  voley: {
    titulo: 'Vóley',
    descripcion: 'Juego de red con pelota liviana. Ideal para todas las edades y niveles.',
    imagen: '/voley/centro-fomento-villa-elvira_voley4.jpg',
    video: '/voley/voley.mp4',
    horario: 'Martes y jueves 18:00',
    profesor: 'Laura Benítez',
    inscripcion: '/voley/formulario-inscripcion.pdf',
    reglas: [
      'Cada equipo tiene 6 jugadores en cancha.',
      'No se puede retener la pelota.',
      'Se juega al mejor de 3 sets.',
      'Rotación obligatoria después de cada punto ganado en saque.'
    ],
    galeria: [
      '/voley/centro-fomento-villa-elvira_voley.jpg',
      '/voley/centro-fomento-villa-elvira_voley2.jpg',
      '/voley/centro-fomento-villa-elvira_voley3.jpg'
    ],
    testimonios: [
      {
        nombre: 'Sofía',
        mensaje: 'Me ayudó a mejorar mi coordinación y hacer nuevas amistades.'
      },
      {
        nombre: 'Marcos',
        mensaje: 'Excelente ambiente y muy buena profesora.'
      }
    ]
  },

  
};

actividad: any;
tipoActividad: string = '';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.tipoActividad = this.route.snapshot.paramMap.get('id') || '';
  this.actividad = this.actividadesMock[this.tipoActividad];

  if (!this.actividad) {
    this.actividad = {
      titulo: 'Actividad no encontrada',
      descripcion: 'No hay información disponible para esta actividad.',
      imagen: 'default.jpg'
    };
  }
}
}

