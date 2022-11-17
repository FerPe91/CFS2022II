"use strict";
exports.__esModule = true;
var Especialidad = /** @class */ (function () {
    function Especialidad(nombre) {
        this.nombre = nombre;
    }
    Especialidad.prototype.getNombre = function () {
        return this.nombre;
    };
    Especialidad.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Especialidad;
}());
exports["default"] = Especialidad;
