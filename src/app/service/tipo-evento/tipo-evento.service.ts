import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoEvento } from '../../model/tipo-evento';

@Injectable({
  providedIn: 'root',
})
export class TipoEventoService {
  private apiUrl = environment.apiUrl + '/tipo-evento';

  constructor(private httpClient: HttpClient) {}

  create(tipoEvento: TipoEvento): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/create', tipoEvento);
  }

  getAll(): Observable<any> {
    return this.httpClient.get<TipoEvento[]>(this.apiUrl + '/getAll');
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get<TipoEvento>(this.apiUrl + '/getById/' + id);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.apiUrl + '/delete/' + id);
  }

  update(tipoEvento: TipoEvento): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/update', tipoEvento);
  }
}
