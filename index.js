var ColorDePiel;
(function (ColorDePiel) {
    ColorDePiel["blanco"] = "Blanco";
    ColorDePiel["negro"] = "Negro";
})(ColorDePiel || (ColorDePiel = {}));
var nombre;
var edad;
var esMacho;
var profe;
var colorDePiel;
nombre = "Lautaro";
edad = 35;
esMacho = true;
colorDePiel = ColorDePiel.blanco;
var Profesor = /** @class */ (function () {
    function Profesor(profesor) {
        this.nombre = profesor.nombre;
        this.edad = profesor.edad;
        this.esMacho = profesor.esMacho;
        this.colorDePiel = profesor.colorDePiel;
    }
    return Profesor;
}());
profe = new Profesor({
    nombre: nombre,
    edad: edad,
    esMacho: esMacho,
    colorDePiel: colorDePiel,
});
function genericFunction(valor1, valor2) {
    return {
        valor1: valor1,
        valor2: valor2,
    };
}
var result = genericFunction("1", "2");
console.log(result);
// profe = 1;
