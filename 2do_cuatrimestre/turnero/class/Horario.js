"use strict";
exports.__esModule = true;
var Horario = /** @class */ (function () {
    function Horario(fecha, hora) {
        this.fecha = fecha;
        this.hora = hora;
    }
    Horario.prototype.getFecha = function () {
        return this.fecha;
    };
    Horario.prototype.getHora = function () {
        return this.hora;
    };
    Horario.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    Horario.prototype.setHora = function (hora) {
        this.hora = hora;
    };
    return Horario;
}());
exports["default"] = Horario;
