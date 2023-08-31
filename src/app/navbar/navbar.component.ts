import { Component } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  titulo = 'Sitio de compras';
  private readonly cantidadDeItemsDelCarrito$ =
    this.carritoService.cantidadDeProductosEnElCarrito;
  cantidadDeItemsDelCarrito: number = 0;
  private cantidadDeItemsDelCarritoSubscription: Subscription;

  constructor(private carritoService: CarritoService) {
    this.cantidadDeItemsDelCarritoSubscription =
      this.cantidadDeItemsDelCarrito$.subscribe({
        next: (value) => {
          this.cantidadDeItemsDelCarrito = value;
        },
        error: (err) => {
          console.error(`Hubo un error ${err}`);
        },
        complete: () => {
          console.log('Se completo el observable');
        },
      });
  }
}
