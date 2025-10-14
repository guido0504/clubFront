import { Component, OnInit } from '@angular/core';
import { TipoActividadService } from '../../service/tipo-actividad/tipo-actividad.service';

@Component({
  selector: 'app-salud',
  imports: [],
  templateUrl: './salud.html',
  styleUrl: './salud.css'
})
export class Salud implements OnInit{

  constructor(private tipoActividadService: TipoActividadService){}

  ngOnInit(): void {
    this.tipoActividadService.getAll().subscribe(response => {
      console.log(response);
    })
  }

  
}
