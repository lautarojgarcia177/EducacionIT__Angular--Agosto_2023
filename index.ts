interface IProfesor {
  nombre: string;
  edad: number;
  esMacho: boolean | null | undefined;
  colorDePiel?: ColorDePiel;
}

enum ColorDePiel {
  blanco = "Blanco",
  negro = "Negro",
}

let nombre: string;
let edad: number;
let esMacho: boolean;
let profe: Profesor;
let colorDePiel: ColorDePiel;

nombre = "Lautaro";
edad = 35;
esMacho = true;
colorDePiel = ColorDePiel.blanco;

class Profesor implements IProfesor {
  nombre;
  edad;
  esMacho;
  colorDePiel;
  constructor(profesor: IProfesor) {
    this.nombre = profesor.nombre;
    this.edad = profesor.edad;
    this.esMacho = profesor.esMacho;
    this.colorDePiel = profesor.colorDePiel;
  }
}

profe = new Profesor({
  nombre,
  edad,
  esMacho,
  colorDePiel,
});

function genericFunction<T>(valor1: T, valor2: T): { valor1: T; valor2: T } {
  return {
    valor1,
    valor2,
  };
}

const result = genericFunction<string>("1", "2");

console.log(result);
// profe = 1;
