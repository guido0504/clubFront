import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoActividadService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient){}

  public getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.url + "/tipo-actividad/getAll");
  }
  
}
