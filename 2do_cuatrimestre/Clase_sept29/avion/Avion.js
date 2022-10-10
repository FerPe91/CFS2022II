"use strict";
exports.__esModule = true;
var Avion = /** @class */ (function () {
    function Avion(color, ruedas, cantidadAsientos, verificacionTecnica, velocidad) {
        this.color = color;
        this.ruedas = ruedas;
        this.cantidadAsientos = cantidadAsientos;
        this.verificacionTecnica = verificacionTecnica;
        this.velocidad = velocidad;
    }
    Avion.prototype.acelerar = function () {
        console.log("El avion esta acelarando a" + this.velocidad);
    };
    Avion.prototype.despegar = function () {
        console.log("El avion esta despegando...");
    };
    Avion.prototype.aterrizar = function () {
        console.log("El avion esta aterrizando...");
    };
    Avion.prototype.getColor = function () {
        return this.color;
    };
    Avion.prototype.getRuedas = function () {
        return this.ruedas;
    };
    Avion.prototype.getCantidadDeAsientos = function () {
        return this.cantidadAsientos;
    };
    Avion.prototype.getVerificacionTecnica = function () {
        return this.verificacionTecnica;
    };
    Avion.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Avion.prototype.setColor = function (color) {
        this.color = color;
    };
    Avion.prototype.setRuedas = function (ruedas) {
        this.ruedas = ruedas;
    };
    Avion.prototype.setCantidadDeAsientos = function (cantAsi) {
        this.cantidadAsientos = cantAsi;
    };
    Avion.prototype.setVerificacionTecnica = function (verifTec) {
        this.verificacionTecnica = verifTec;
    };
    Avion.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    return Avion;
}());
exports["default"] = Avion;
//color, ruedas, cantidadDeAsientos, verificacionTecnica, velocidad
var avioneta = new Avion("negro", 5, 6, true, 350);
console.log("\n------------------avioneta---------------------- \n");
console.log(avioneta);
avioneta.acelerar();
avioneta.despegar();
avioneta.aterrizar();
