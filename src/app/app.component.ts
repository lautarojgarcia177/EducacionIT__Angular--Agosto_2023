import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarSaludo = true;
  buttonMessage = 'Ocultar saludo';
  constructor() {
    
  }
  toggleMostrarSaludo() {
    if (this.buttonMessage === 'Ocultar saludo') {
      this.buttonMessage = 'Mostrar saludo';
      this.mostrarSaludo = false;
    } else {
      this.buttonMessage = 'Ocultar saludo';
      this.mostrarSaludo = true;
    }
  }
}
