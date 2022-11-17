"use strict";
exports.__esModule = true;
var fs = require("fs");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8'); //Se crea una variable donde se guardara los datos del archivo "txt"
        this.arregloString = archivoTxt.split(';'); //vamoS a tener nuestro "objetos" separados por ; 
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
exports["default"] = GestorDeArchivos;
