"use strict";
exports.__esModule = true;
var GestorDeArchivos_1 = require("./class/GestorDeArchivos");
var funciones_1 = require("./funciones");
var readlineSync = require("readline-sync");
///-------------------------------------------------------------------------------------------------------------------------------------------------------
var arregloEspecialidad = []; //creo arreglo para las especialidades del txt
var datosEspecialidad = new GestorDeArchivos_1["default"]('./txt/especialidad.txt'); //le paso ruta para leer archivos
for (var i = 0; i < datosEspecialidad.getArregloString().length; i++) {
    (0, funciones_1.cargarEspecialidades)(arregloEspecialidad, datosEspecialidad.getArregloString()[i]);
}
//=====================MEDICOS=============================
//Mario, 163564, Traumatologo;Maria, 789755,
var arregloMedicos = [];
var datosMedicos = new GestorDeArchivos_1["default"]('./txt/medicos.txt');
for (var i = 0; i < datosMedicos.getArregloString().length; i++) {
    (0, funciones_1.cargarMedicos)(arregloMedicos, arregloEspecialidad, datosMedicos.getArregloString()[i]);
}
console.log(arregloMedicos);
//=====================PACIENTES=============================
var arregloPacientes = [];
var datosPacientes = new GestorDeArchivos_1["default"]('./txt/pacientes.txt');
for (var i = 0; i < datosPacientes.getArregloString().length; i++) {
    (0, funciones_1.cargarPaciente)(arregloPacientes, datosPacientes.getArregloString()[i]);
}
//=====================HORARIO=============================
var arregloHorarios = [];
var datosHorarios = new GestorDeArchivos_1["default"]('./txt/horarios.txt');
for (var i = 0; i < datosHorarios.getArregloString().length; i++) {
    (0, funciones_1.cargarHorarios)(arregloHorarios, datosHorarios.getArregloString()[i]);
}
/*------------------------------------------MENU DE OPCIONES---------------------------------------*/
var opcion = 1;
while (opcion > 0 && opcion < 5) {
    console.log("------------------------------------------MENU PRINCIPAL DE OPCIONES---------------------------------------");
    console.log("ingrese una opcion: \n");
    console.log("    1)Menu especialidades\n    2)Menu Medicos\n    3)Menu Pacientes\n    4)Menu Hora y Fecha\n");
    opcion = Number(readlineSync.question("ingrese una opcion:"));
    console.clear();
    switch (opcion) {
        case 1:
            (0, funciones_1.verMenuEspecialidades)(arregloEspecialidad);
            break;
        case 2: //medicos
            (0, funciones_1.verMenuMedicos)(arregloMedicos, arregloEspecialidad);
            break;
        case 3:
            (0, funciones_1.verMenuPacientes)(arregloPacientes);
            break;
        case 4:
            (0, funciones_1.verMenuHoraYFecha)(arregloHorarios);
            break;
        default:
            break;
    }
}
