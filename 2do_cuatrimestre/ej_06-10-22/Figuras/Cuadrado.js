"use strict";
exports.__esModule = true;
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.calcularPerimetro = function () {
        console.log("El Perimetro es de: " + this.lado * 4 + " mts.");
    };
    Cuadrado.prototype.calcularArea = function () {
        console.log("El Area es de: " + Math.pow(this.lado, 2) + "mts");
    };
    Cuadrado.prototype.getLado = function () {
        return this.lado;
    };
    Cuadrado.prototype.setLado = function (lado) {
        this.lado = lado;
    };
    return Cuadrado;
}());
exports["default"] = Cuadrado;
console.log('\n------Cuadrado------\n ');
var cuadrado1 = new Cuadrado(5);
console.log(cuadrado1);
cuadrado1.calcularArea();
cuadrado1.calcularPerimetro();
