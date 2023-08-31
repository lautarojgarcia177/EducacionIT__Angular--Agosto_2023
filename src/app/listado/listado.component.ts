import { Component } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  listaProductos = ['Cepillo de dientes', 'Perfume', 'Desodorante'];

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito() {
    this.carritoService.agregarProductoAlCarrito();
  }
}
