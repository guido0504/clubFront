import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.apiUrl + '/auth/login', { username, password });
  }

  guardarToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  obtenerToken() {
    return localStorage.getItem('jwt');
  }
}
