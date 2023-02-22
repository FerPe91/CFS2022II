"use strict";
//implemete errores con try en linea:13 y 35
exports.__esModule = true;
var fs = require("fs");
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota, DNI) {
        if (nombre.length == 0) {
            throw new Error('No se puede ingresar datos vacios');
        }
        else {
            this.nombre = nombre;
        }
        this.nota = nota;
        this.DNI = DNI;
    }
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getDni = function () {
        return this.DNI;
    };
    //   --------ERRORES------
    Alumno.prototype.estaAprobado = function () {
        if (this.nota > 10) {
            throw new Error('No se puede ingresar mayores a 10');
        }
        if (this.nota < 0) {
            throw new Error('No se puede ingresar menores a 0');
        }
        if (this.nota < 7) {
            console.log("El alumno esta desaprobado");
        }
        else {
            console.log("El alumno esta aprobado");
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(nombre, DNI, listaAlumnos) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.listaAlumnos = listaAlumnos;
    }
    Profesor.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    Profesor.prototype.mostrarAlumnos = function () {
        console.log(this.listaAlumnos);
    };
    Profesor.prototype.setListaAlumnos = function (arreglo) {
        this.listaAlumnos = arreglo;
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(nombre, direccion, listaAlumnos, listaProfes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;
    }
    Escuela.prototype.getListaAlumnos = function () {
        return this.listaAlumnos;
    };
    Escuela.prototype.getListaProfes = function () {
        return this.listaProfes;
    };
    return Escuela;
}());
//instalar npm install @types/node
// creamos un gestor que nos permite leer un archivo de texto
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8'); //esta variable guarda "Juan Perez,333333333;Karen Simari,2222222"
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
        //["Juan Perez,333333333","Karen Simari,22222222"]
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
//funcion para crear un nuevo profe
function crearProfesor(profesor, arrayProfesor, arrayAlumnos) {
    //transformo el elemento de tipo string en un objeto de tipo Profesor
    var propiedadProfe = profesor.split(','); //la variable profesor va a contener --->"Juan Perez,333333333" y profesor.split(',') = ["Juan Perez", "333333333"]
    var nombre = propiedadProfe[0];
    var DNI = Number(propiedadProfe[1]);
    var listaAlumnos = arrayAlumnos;
    var nuevoProfe = new Profesor(nombre, DNI, listaAlumnos);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoProfe);
}
//Eliminar profesor en una posicion
function borrarrProfe(arregloProfe, position, arregloAlumnos) {
    delete arregloProfe[position];
}
//Inicio programa
var datos = new GestorDeArchivos('profes.txt'); // devuelve un arreglo de strings con "elementos" de profesores.
var arrayProfe = [];
var alumno1 = new Alumno('', 13, 252546346); //error forzado 
var alumno2 = new Alumno('Juan Dominguez', 5, 25254255);
alumno1.estaAprobado();
alumno2.estaAprobado();
var arrayAlumnos = [alumno1, alumno2];
//creo array de objetos
for (var i = 0; i < datos.getArregloString().length; i++) {
    //Creo Profe uno por uno leyendo el txt
    crearProfesor(datos.getArregloString()[i], arrayProfe, arrayAlumnos);
}
console.log(arrayProfe);
arrayProfe[1].mostrarAlumnos();
