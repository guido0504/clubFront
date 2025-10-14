import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TipoEventoService } from '../../../../service/tipo-evento/tipo-evento.service';
import { TipoEvento } from '../../../../model/tipo-evento';

@Component({
  selector: 'app-list-view',
  imports: [TableModule],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css'
})
export class ListView implements OnInit{


  public listEvento: TipoEvento[] = [];

  constructor(private tipoEventoService: TipoEventoService){}

  ngOnInit(){
    this.getAll();  
  }

  getAll(){
    this.tipoEventoService.getAll().subscribe(response => {
      this.listEvento = response.data;
      console.log(this.listEvento);
    });
  }
}
