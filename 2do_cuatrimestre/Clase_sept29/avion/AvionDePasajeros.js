"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Avion_1 = require("./Avion");
var AvionDePasajeros = /** @class */ (function (_super) {
    __extends(AvionDePasajeros, _super);
    //color, ruedas, cantidadDeAsientos, verificacionTecnica, velocidad
    function AvionDePasajeros(color, ruedas, cantidadAsientos, verificacionTecnica, velocidad, cantTurbinas, desde, hasta) {
        var _this = _super.call(this, color, ruedas, cantidadAsientos, verificacionTecnica, velocidad) || this;
        _this.cantTurbinas = cantTurbinas;
        _this.desde = desde;
        _this.hasta = hasta;
        return _this;
    }
    AvionDePasajeros.prototype.avisoDeSalida = function () {
        console.log("Se\u00F1ores pasajeros estamos por emprender vuelo desde ".concat(this.desde, " con destino a ").concat(this.hasta, " , permanezcan en sus asientos hasta avisar que la fase de despegue este realizada"));
    };
    AvionDePasajeros.prototype.avisoDeLlegada = function () {
        console.log("Se\u00F1ores pasajeros vuelo con destino a ".concat(this.hasta, " proximo a finalizar, entrando en fase de arterrizaje, permanezca en sus asientos"));
    };
    AvionDePasajeros.prototype.getCantidadDeTurbinas = function () {
        return this.cantTurbinas;
    };
    AvionDePasajeros.prototype.getDesde = function () {
        return this.desde;
    };
    AvionDePasajeros.prototype.getHasta = function () {
        return this.hasta;
    };
    AvionDePasajeros.prototype.setCantidadDeTurbinas = function (cantDeTur) {
        this.cantTurbinas = cantDeTur;
    };
    AvionDePasajeros.prototype.setDesde = function (desde) {
        this.desde = desde;
    };
    AvionDePasajeros.prototype.setHasta = function (hasta) {
        this.hasta = hasta;
    };
    return AvionDePasajeros;
}(Avion_1["default"]));
//configuro los valores desde variables
var color = "blanco";
var ruedas = 10;
var cantidadDeAsientos = 200;
var verificacionTecnica = true;
var velocidad = 600;
var cantidadDeTurbinas = 4;
var desde = "Cordoba Capital";
var hasta = "Salta";
var avionDeAerolineas1 = new AvionDePasajeros(color, ruedas, cantidadDeAsientos, verificacionTecnica, velocidad, cantidadDeTurbinas, desde, hasta);
console.log("\n------------------avionDeAerolineas1---------------------- \n");
console.log(avionDeAerolineas1);
avionDeAerolineas1.avisoDeSalida();
avionDeAerolineas1.avisoDeLlegada();
