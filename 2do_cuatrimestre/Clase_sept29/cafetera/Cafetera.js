"use strict";
exports.__esModule = true;
var Cafetera = /** @class */ (function () {
    function Cafetera(color, capsula, estado) {
        this.color = color;
        this.capsula = capsula;
        this.estado = estado;
    }
    Cafetera.prototype.prenderApagar = function () {
        if (this.estado == true) {
            return "PRENDIDA";
        }
        else {
            return "APAGADA";
        }
    };
    Cafetera.prototype.hacerCafe = function () {
        console.log("Se esta haciendo el cafe");
    };
    Cafetera.prototype.mostrarInfo = function () {
        console.log("la cafetera modelo BASE de color ".concat(this.color, " esta ").concat(this.prenderApagar()));
    };
    Cafetera.prototype.getColor = function () {
        return this.color;
    };
    Cafetera.prototype.getCapsula = function () {
        return this.capsula;
    };
    Cafetera.prototype.getEstado = function () {
        return this.estado;
    };
    Cafetera.prototype.setColor = function (color) {
        this.color = color;
    };
    Cafetera.prototype.setCapsula = function (capsula) {
        this.capsula = capsula;
    };
    Cafetera.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    return Cafetera;
}());
exports["default"] = Cafetera;
var nuevaCafetera = new Cafetera("Azul", true, true);
nuevaCafetera.mostrarInfo();
