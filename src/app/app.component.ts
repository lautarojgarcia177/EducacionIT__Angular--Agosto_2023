import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // completar la funcion calcularSuma con todo el tipado correspondiente
  calcularSuma(numeros: number[]): number {
    let suma = 0;
    for (let numero of numeros) {
      suma += numero;
    }
    return suma;
  }
  constructor() {
    console.log(this.calcularSuma([1, 2, 3, 4, 5, 6]));
  }
}
