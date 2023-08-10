import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { BotonChangeColorComponent } from './boton-change-color/boton-change-color.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    BotonChangeColorComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export enum skinColor {
  black = 'black',
  white = 'white',
}
export interface Child {
  age: number;
  name: string;
  color: skinColor;
}

const nena: Child = {
  age: 5,
  name: 'Marisa',
  color: skinColor.black,
};

const nene: Child = {
  age: 4,
  name: 'Jose',
  color: skinColor.white,
};
