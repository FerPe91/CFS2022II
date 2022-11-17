"use strict";
exports.__esModule = true;
var Turno = /** @class */ (function () {
    function Turno(medico, paciente, horario, numeroDeTurno) {
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
        this.numeroDeTurno = numeroDeTurno;
    }
    Turno.prototype.getMedico = function () {
        return this.medico;
    };
    Turno.prototype.getPaciente = function () {
        return this.paciente;
    };
    Turno.prototype.getHorario = function () {
        return this.horario;
    };
    Turno.prototype.getNumeroDeTurno = function () {
        return this.numeroDeTurno;
    };
    Turno.prototype.setMedico = function (medico) {
        this.medico = medico;
    };
    Turno.prototype.setPaciente = function (paciente) {
        this.paciente = paciente;
    };
    Turno.prototype.setHorario = function (horario) {
        this.horario = horario;
    };
    Turno.prototype.setNumeroDeTurno = function (numeroDeTurno) {
        this.numeroDeTurno = numeroDeTurno;
    };
    return Turno;
}());
exports["default"] = Turno;
