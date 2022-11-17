"use strict";
exports.__esModule = true;
exports.verMenuHoraYFecha = exports.borrarFechaYHora = exports.creaHorario = exports.cargarHorarios = exports.verMenuPacientes = exports.borrarPaciente = exports.crearPacientes = exports.cargarPaciente = exports.verMenuMedicos = exports.borrarMedico = exports.modificarMedicos = exports.cargarMedicos = exports.crearMedico = exports.verMenuEspecialidades = exports.borrarEspecialidad = exports.modificarEspecialidad = exports.crearEspecialidad = exports.cargarEspecialidades = exports.crearNumRamdom = void 0;
//crud: create, read, update, delete
var Especialidad_1 = require("./class/Especialidad");
var Medico_1 = require("./class/Medico");
var readlineSync = require("readline-sync");
var readFileSync = require("readline-sync");
var Paciente_1 = require("./class/Paciente");
var Horario_1 = require("./class/Horario");
//funciones extras
function crearNumRamdom(max) {
    return Math.floor(Math.random() * max); //Math.floor 
}
exports.crearNumRamdom = crearNumRamdom;
function mostrarDatosFechaHora(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        console.log("".concat(i + 1, ") ").concat(arreglo[i].getFecha().toUpperCase(), " -> ").concat(arreglo[i].getHora(), "hs.\n "));
    }
}
function mostrarNombre(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("".concat(i + 1, ") ").concat(arr[i].getNombre().toUpperCase(), "\n "));
    }
}
function mostrarArregloMedicos(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("".concat(i + 1, ")  ").concat(arr[i].getNombre().toUpperCase(), "     ").concat(arr[i].getMatricula(), "  ").concat(arr[i].getEspecialidad().getNombre(), "\n "));
    }
}
//==============================================================================================================
//==========================================FUNCIONES PARA ESPECIALIDADES=======================================
//==============================================================================================================
function cargarEspecialidades(arreglo, especialidad) {
    var nuevaEspecialidad = new Especialidad_1["default"](especialidad);
    arreglo.push(nuevaEspecialidad);
    return arreglo;
}
exports.cargarEspecialidades = cargarEspecialidades;
//Funcion crear especialidad
function crearEspecialidad(arreglo) {
    var nuevaEspecialidad = readlineSync.question("ingrese nueva especialidad:").toUpperCase();
    var especialidad = new Especialidad_1["default"](nuevaEspecialidad);
    arreglo.push(especialidad);
    return especialidad;
}
exports.crearEspecialidad = crearEspecialidad;
//Funcion Modificar especialidad
function modificarEspecialidad(arreglo) {
    console.log("---------------MODIFICAR ESPECIALIDAD-----------------------");
    var op1 = 1;
    while (op1 > -1 || op1 < 2) { //while para que por lo menos no rompa o el codigo cuando ingrese un valor mayor
        if (op1 == 0) {
            break;
        }
        else {
            op1 = Number(readFileSync.question("INGRESE LA OPCION: \n1)MODIFICAR \n2)VER ESPECIALIDADES \n0)Menu Principal\n"));
            switch (op1) {
                case 1:
                    console.log(">>>>MODIFICAR DATOS<<<<\n ");
                    mostrarNombre(arreglo);
                    var op2 = Number(readFileSync.question("INGRESE LA OPCION: "));
                    while (op2 <= 0 || op2 > arreglo.length) { //while para que maneje el rango entre 1 y longitud de arreglo
                        console.log("NO EXISTE ESPECIALIDAD PARA VALOR INGRESADO\nUTILICE MAYOR A: ---> 0 y MENOR A: ---> ".concat(arreglo.length, "\n"));
                        mostrarNombre(arreglo); //muestro el arreglo para elegir el valor
                        op2 = Number(readFileSync.question("INGRESE LA OPCION: "));
                    }
                    //muestro por consola los cambios realizados
                    var nombreViejoANuevo = arreglo[op2 - 1].getNombre() + "-->";
                    console.log("\n  Modificando:--->(".concat(arreglo[op2 - 1].getNombre(), ") "));
                    var nombreNuevo = readFileSync.question("Nuevo nombre de ESPECIALIDAD: ");
                    arreglo[op2 - 1].setNombre(nombreNuevo);
                    nombreViejoANuevo += arreglo[op2 - 1].getNombre();
                    console.log("\n Se Modifico:\n          " + nombreViejoANuevo.toUpperCase() + "\n \n ");
                    break;
                case 2:
                    console.log(">>>>VER DATOS<<<<\n");
                    mostrarNombre(arreglo);
                    break;
                case 0:
                    break;
            }
        }
    }
}
exports.modificarEspecialidad = modificarEspecialidad;
function borrarEspecialidad(arreglo, especialidad) {
    for (var i = 0; i < arreglo.length; i++) {
        if (especialidad == arreglo[i].getNombre()) {
            arreglo.splice(i, 1);
            break;
        }
        else {
            console.log("Esta especialidad no existe");
        }
    }
}
exports.borrarEspecialidad = borrarEspecialidad;
function verMenuEspecialidades(arreglo) {
    var opEspecialidad = 1;
    while (opEspecialidad > 0 && opEspecialidad < 5) {
        console.log("------------------MENU ESPECIALIDADES--------------------");
        console.log("ingrese una opcion: \n");
        console.log("   1)Cargar Nueva Especialidad\n   2)Modificar Especialidad\n   3)Borrar Especialidad\n   0)Menu Principal\n");
        opEspecialidad = Number(readlineSync.question("ingrese una opcion: "));
        console.clear();
        switch (opEspecialidad) {
            case 1:
                crearEspecialidad(arreglo);
                break;
            case 2:
                modificarEspecialidad(arreglo);
                break;
            case 3:
                console.log(arreglo);
                var valor = readlineSync.question("Ingrese la especialidad a BORRAR: ");
                borrarEspecialidad(arreglo, valor);
                console.log(arreglo);
                break;
            default:
                break;
        }
    }
}
exports.verMenuEspecialidades = verMenuEspecialidades;
//==============================================================================================================
//==========================================FUNCIONES PARA MEDICOS==============================================
//==============================================================================================================
function crearMedico(arreglo, arregloEspecialidad) {
    var nombreMedico = readlineSync.question("Ingrese Nombre");
    var matricula = Number(readlineSync.question("\nIngrese Numero de Matricula\n"));
    mostrarNombre(arregloEspecialidad);
    var especialidad = Number(readlineSync.question("\nElija Especialidad\n"));
    var nuevoMedico = new Medico_1["default"](nombreMedico, matricula, arregloEspecialidad[especialidad]);
    arreglo.push(nuevoMedico);
    return arreglo;
}
exports.crearMedico = crearMedico;
function cargarMedicos(arreglo, arregloEspecialidad, medico) {
    var datos = medico.split(","); //Mario, 163564;Maria, 789755,
    var nombre = datos[0];
    var matricula = Number(datos[1]);
    var espe = arregloEspecialidad[crearNumRamdom(arregloEspecialidad.length)];
    var nuevoMedico = new Medico_1["default"](nombre, matricula, espe);
    arreglo.push(nuevoMedico);
    return arreglo;
}
exports.cargarMedicos = cargarMedicos;
function modificarMedicos(arreglo) {
    console.log("---------------MODIFICAR MEDICOS-----------------------");
    var op1 = 1;
    while (op1 > -1 || op1 < 2) { //while para que por lo menos no rompa o el codigo cuando ingrese un valor mayor
        if (op1 == 0) {
            break;
        }
        else {
            op1 = Number(readFileSync.question("INGRESE LA OPCION: \n1)MODIFICAR MEDICOS \n2)VER MEDICOS \n0)SALIR\n"));
            switch (op1) {
                case 1:
                    console.log(">>>>MODIFICAR DATOS<<<<\n ");
                    mostrarArregloMedicos(arreglo);
                    var op2 = Number(readFileSync.question("INGRESE LA OPCION: "));
                    while (op2 <= 0 || op2 > arreglo.length) { //while para que maneje el rango entre 1ylongitud de arreglo
                        console.log("NO EXISTE MEDICO PARA VALOR INGRESADO\nUTILICE MAYOR A: ---> 0 y MENOR A: ---> ".concat(arreglo.length, "\n"));
                        mostrarArregloMedicos(arreglo);
                        op2 = Number(readFileSync.question("INGRESE LA OPCION: "));
                    }
                    //muestro los datos modificados
                    var nombreViejoANuevo = arreglo[op2 - 1].getNombre() + "-->";
                    console.log("\n  Modificando:--->(".concat(arreglo[op2 - 1].getNombre(), ") "));
                    var nombreNuevo = readFileSync.question("Nuevo nombre de MEDICO: ");
                    arreglo[op2 - 1].setNombre(nombreNuevo);
                    nombreViejoANuevo += arreglo[op2 - 1].getNombre();
                    console.log("\n Se Modifico:\n          " + nombreViejoANuevo.toUpperCase() + "\n \n ");
                    break;
                case 2:
                    console.log(">>>>VER DATOS<<<<\n");
                    console.log("N°|  Nombre  |Matricula|Especialidad\n");
                    mostrarArregloMedicos(arreglo);
                    break;
            }
        }
    }
}
exports.modificarMedicos = modificarMedicos;
//Mario, 163564, Traumatologo;Maria, 789755,
function borrarMedico(arreglo) {
    console.log(arreglo);
    var matricula = Number(readlineSync.question("ingrese una MATRICULA del MEDICO a BORRAR: "));
    for (var i = 0; i < arreglo.length; i++) {
        if (matricula == arreglo[i].getMatricula()) {
            arreglo.splice(i, 1);
        }
        else {
            return "no existe tal matricula";
        }
    }
}
exports.borrarMedico = borrarMedico;
function verMenuMedicos(arreglo, arregloEspecialidad) {
    var opMedico = 1;
    while (opMedico > 0 && opMedico < 5) {
        console.log("------------------MENU MEDICOS--------------------");
        console.log("ingrese una opcion: ");
        console.log("1)Cargar Nuevo medico\n2)Modificar Medico\n3)Borrar Medico\nOtro)Salir");
        opMedico = Number(readlineSync.question("ingrese una opcion: "));
        switch (opMedico) {
            case 1:
                crearMedico(arreglo, arregloEspecialidad);
                break;
            case 2:
                modificarMedicos(arreglo);
                break;
            case 2:
                borrarMedico(arreglo);
                break;
            default:
                console.log("");
                break;
        }
    }
}
exports.verMenuMedicos = verMenuMedicos;
//==============================================================================================================
//==========================================FUNCIONES PARA PACIENTES============================================
//==============================================================================================================
function cargarPaciente(arreglo, paciente) {
    var datos = paciente.split(","); //Mario, Camieta, 15658698, OSDE; Josefina, Rodriguez, 40236587, OSPRERA;
    var nombre = datos[0];
    var apellido = datos[1];
    var dni = Number(datos[2]);
    var telefono = Number(datos[3]);
    var obraSocial = datos[4];
    var nuevoPaciente = new Paciente_1["default"](nombre, apellido, dni, telefono, obraSocial);
    arreglo.push(nuevoPaciente);
    return arreglo;
}
exports.cargarPaciente = cargarPaciente;
function crearPacientes(arreglo) {
    var nuevoNombre = readlineSync.question("ingrese NOMBRE del nuevo PACIENTE");
    var nuevoApellido = readlineSync.question("ingrese APELLIDO del nuevo PACIENTE");
    var nuevoDni = (readlineSync.question("ingrese  DNI"));
    var nuevoTelefono = Number(readlineSync.question("ingrese un TELEFONO"));
    var nuevaObraSocial = readlineSync.question("ingrese Obra Social");
    var paciente = new Paciente_1["default"](nuevoNombre, nuevoApellido, nuevoDni, nuevoTelefono, nuevaObraSocial);
    arreglo.push(paciente);
    return paciente;
}
exports.crearPacientes = crearPacientes;
function borrarPaciente(arreglo) {
    console.log(arreglo);
    var dni = Number(readlineSync.question("Ingrese la DNI del PACIENTE a BORRAR "));
    if (arreglo.length == 0) {
        console.log(">>>>>NINGUN PACIENTE CARGADO<<<<<<");
    }
    for (var i = 0; i < arreglo.length; i++) {
        console.log(arreglo.length);
        if (dni == arreglo[i].getDni()) {
            arreglo.splice(i, 1);
        }
        else {
            return "Ningun cliente relacionado al nro. de DNI ingresado";
        }
    }
    console.log(arreglo);
}
exports.borrarPaciente = borrarPaciente;
function verMenuPacientes(arreglo) {
    var opPacientes = 1;
    while (opPacientes > 0 && opPacientes < 5) {
        console.log("------------------MENU PACIENTES--------------------");
        console.log("ingrese una opcion: \n");
        console.log("1)Cargar Nuevo Paciente\n2)Borrar Paciente");
        opPacientes = Number(readlineSync.question("ingrese una opcion: \n"));
        switch (opPacientes) {
            case 1:
                crearPacientes(arreglo);
                break;
            case 2:
                borrarPaciente(arreglo);
                break;
            default:
                console.log("");
                break;
        }
    }
}
exports.verMenuPacientes = verMenuPacientes;
//==============================================================================================================
//==========================================FUNCIONES PARA HORARIOS============================================
//==============================================================================================================
function cargarHorarios(arreglo, horarios) {
    var FechaYHora = horarios.split(",");
    var fecha = FechaYHora[0];
    var hora = Number(FechaYHora[1]);
    var nuevoHorario = new Horario_1["default"](fecha, hora);
    arreglo.push(nuevoHorario);
    return arreglo;
}
exports.cargarHorarios = cargarHorarios;
function creaHorario(arreglo) {
    //hacer variables dias, mes y año para concatenar en nueva fecha. Lo mismo con Horas y minutos en Nuevo Horario
    var nuevafecha = readlineSync.question("Ingrese Fecha del turno");
    var nuevoHorario = 0;
    console.log("Horarios de atencion: 8hs - 19hs");
    nuevoHorario = Number(readlineSync.question("Ingrese Horario del turno"));
    while (nuevoHorario < 8 || nuevoHorario > 19) {
        console.log("Horarios de atencion: 8hs - 19hs");
        nuevoHorario = Number(readlineSync.question("Horario incorrecto, ingrese nuevamente"));
    }
    var nuevaFechaYHorario = new Horario_1["default"](nuevafecha, nuevoHorario);
    arreglo.push(nuevaFechaYHorario);
    return arreglo;
}
exports.creaHorario = creaHorario;
//modificar borrar.
function borrarFechaYHora(arreglo) {
    console.log(arreglo);
    var Horario = Number(readlineSync.question("Horario que desea ELIMINAR"));
    if (arreglo.length == 0) {
        console.log(">>>>>NINGUN HORARIO CARGADO<<<<<<");
    }
    for (var i = 0; i < arreglo.length; i++) {
        console.log(arreglo.length);
        if (Horario == arreglo[i].getHora()) {
            arreglo.splice(i, 1);
        }
        else {
            return "Ningun HORARIO cargado, relacionado a la HORA ingresada";
        }
    }
    console.log(arreglo);
}
exports.borrarFechaYHora = borrarFechaYHora;
function verMenuHoraYFecha(arreglo) {
    var opHoraFecha = 1;
    while (opHoraFecha > 0 && opHoraFecha < 5) {
        console.log("------------------MENU HORA Y FECHA--------------------");
        console.log("ingrese una opcion: \n");
        console.log("1)Cargar nuevo Horario y Fecha\n2)Borrar Horario y Fecha\n3)Ver Horarios y Fechas\n");
        opHoraFecha = Number(readlineSync.question("ingrese una opcion: \n"));
        switch (opHoraFecha) {
            case 1:
                creaHorario(arreglo);
                break;
            case 2:
                borrarFechaYHora(arreglo);
                break;
            case 3:
                mostrarDatosFechaHora(arreglo);
                break;
            default:
                console.log("");
                break;
        }
    }
}
exports.verMenuHoraYFecha = verMenuHoraYFecha;
