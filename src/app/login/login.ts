import { Component } from '@angular/core';
import { LoginService } from '../service/login/login';
import { SHARED_IMPORTS } from '../shared';

@Component({
  selector: 'app-login',
  imports: [SHARED_IMPORTS],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (res) => {this.loginService.guardarToken(res.token); console.log("Se conecto");},
      error: (err) => console.error('Error de login', err)
    });
  }
}
