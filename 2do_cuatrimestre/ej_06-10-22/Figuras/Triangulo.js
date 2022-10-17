"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Cuadrado_1 = require("./Cuadrado");
var trianguloEquilatero = /** @class */ (function (_super) {
    __extends(trianguloEquilatero, _super);
    function trianguloEquilatero(lado) {
        return _super.call(this, lado) || this;
    }
    trianguloEquilatero.prototype.calcularPerimetro = function () {
        console.log("El perimetro es: " + (this.lado * 3) + " mts.");
    };
    trianguloEquilatero.prototype.calcularArea = function () {
        console.log("El perimetro es de: " + ((this.lado * this.lado) / 2) + " mts.");
    };
    trianguloEquilatero.prototype.getLado = function () {
        return this.lado;
    };
    trianguloEquilatero.prototype.setLado = function (lado) {
        this.lado = lado;
    };
    return trianguloEquilatero;
}(Cuadrado_1["default"]));
console.log('\n------Triangulo------\n ');
var triangulo1 = new trianguloEquilatero(5);
console.log(triangulo1);
triangulo1.calcularArea();
triangulo1.calcularPerimetro();
