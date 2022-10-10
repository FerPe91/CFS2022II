"use strict";
exports.__esModule = true;
var reloj = /** @class */ (function () {
    function reloj(valor, hora, digitalOAnalogico) {
        this.valor = valor;
        this.hora = hora;
        this.digitalOAnalogico = digitalOAnalogico;
    }
    reloj.prototype.darHora = function () {
        if (this.hora > 12) {
            console.log("la hora es:" + this.hora + "pm");
        }
        else {
            console.log("la hora es:" + this.hora + "am");
        }
    };
    reloj.prototype.mostrarInfo = function () {
        console.log("El reloj es, ".concat(this.digitalOAnalogico, " esta en la hora ").concat(this.hora, ", tiene un valor de $ ").concat(this.valor));
    };
    reloj.prototype.getHora = function () {
        return this.hora;
    };
    reloj.prototype.getDigitalOAnalogico = function () {
        return this.digitalOAnalogico;
    };
    reloj.prototype.getValor = function () {
        return this.valor;
    };
    reloj.prototype.setHora = function (hora) {
        console.log("Cambiando la hora...");
        this.hora = hora;
    };
    reloj.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    reloj.prototype.setDigitalOAnalogico = function (digitalOAnalogico) {
        this.digitalOAnalogico = digitalOAnalogico;
    };
    return reloj;
}());
exports["default"] = reloj;
var reloj1 = new reloj(5000, 11, "analogico");
reloj1.mostrarInfo();
reloj1.darHora();
reloj1.setHora(4);
reloj1.setValor(18000);
reloj1.mostrarInfo();
reloj1.darHora();
