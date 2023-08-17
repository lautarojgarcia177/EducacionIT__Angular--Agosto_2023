import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent {
  constructor() {
  }
  urlImg =
    'https://th.bing.com/th/id/OIP.m1FcoUO3NqgOuZiiCwKr0QHaDr?pid=ImgDet&rs=1';
  claseDeBorde = "borde-negro";
}
