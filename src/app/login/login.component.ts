import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export const LOCALSTORAGE_ENTRY__USUARIO_LOGUEADO = 'USUARIO_LOGUEADO';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loguearse() {
    localStorage.setItem(
      LOCALSTORAGE_ENTRY__USUARIO_LOGUEADO,
      JSON.stringify(true)
    );
  }
  desloguearse() {
    localStorage.setItem(
      LOCALSTORAGE_ENTRY__USUARIO_LOGUEADO,
      JSON.stringify(false)
    );
  }
}
