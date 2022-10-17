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
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(lado, lado2) {
        var _this = _super.call(this, lado) || this;
        _this.lado2 = lado2;
        return _this;
    }
    Rectangulo.prototype.calcularPerimetro = function () {
        console.log("El perimetro es de:" + (this.lado * 2 + this.lado2 * 2) + " mts.");
    };
    Rectangulo.prototype.calcularArea = function () {
        console.log("El Area es de:" + this.lado * this.lado2 + " mts.");
    };
    Rectangulo.prototype.getLado = function () {
        return this.lado;
    };
    Rectangulo.prototype.getLado2 = function () {
        return this.lado2;
    };
    Rectangulo.prototype.setLado = function (lado) {
        this.lado = lado;
    };
    Rectangulo.prototype.setLado2 = function (lado2) {
        this.lado2 = lado2;
    };
    return Rectangulo;
}(Cuadrado_1["default"]));
console.log('\n------Rectangulo------\n ');
var rectangulo1 = new Rectangulo(5, 3);
console.log(rectangulo1);
rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();
