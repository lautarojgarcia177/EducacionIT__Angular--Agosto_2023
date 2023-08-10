import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent {
  noRetornar(
    nombre: string,
    edad: number
  ): {
    nombre: string;
    edad: number;
  } {
    return {
      nombre,
      edad,
    };
  }
}
