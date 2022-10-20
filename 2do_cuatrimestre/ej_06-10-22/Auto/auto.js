"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(velocidad, motor) {
        this.velocidad = velocidad;
        this.motor = motor;
    }
    Auto.prototype.acelerar = function () {
        console.log("Acelerando..");
        var kms = 0;
        for (var i = 0; i <= 5; i++) {
            kms = kms + 18;
            console.log(kms + "Km/h");
        }
    };
    Auto.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Auto.prototype.getMotor = function () {
        return this.motor;
    };
    Auto.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    return Auto;
}());
exports["default"] = Auto;
var auto1 = new Auto(91, "1.7");
console.log(auto1);
auto1.acelerar();
