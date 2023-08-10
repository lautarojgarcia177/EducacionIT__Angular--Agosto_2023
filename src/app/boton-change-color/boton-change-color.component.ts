import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-change-color',
  templateUrl: './boton-change-color.component.html',
  styleUrls: ['./boton-change-color.component.css'],
})
export class BotonChangeColorComponent {
  headerColor = 'black'; //Initial color
  changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.headerColor = randomColor;
  }
}
