"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, apellido, dni, telefono, obraSocial) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.telefono = telefono;
        this.obraSocial = obraSocial;
    }
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getApellido = function () {
        return this.apellido;
    };
    Paciente.prototype.getDni = function () {
        return this.dni;
    };
    Paciente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Paciente.prototype.getObraSocial = function () {
        return this.obraSocial;
    };
    Paciente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Paciente.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Paciente.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Paciente.prototype.setTelefono = function (telefonmo) {
        this.telefono = this.telefono;
    };
    Paciente.prototype.setObraSocial = function (obraSocial) {
        this.obraSocial = obraSocial;
    };
    return Paciente;
}());
exports["default"] = Paciente;
