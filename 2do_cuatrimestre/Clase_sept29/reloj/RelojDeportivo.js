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
var reloj_1 = require("./reloj");
var RelojDeportivo = /** @class */ (function (_super) {
    __extends(RelojDeportivo, _super);
    function RelojDeportivo(valor, hora, digitalOAnalogico, luz) {
        var _this = _super.call(this, valor, hora, digitalOAnalogico) || this;
        _this.luz = luz;
        return _this;
    }
    RelojDeportivo.prototype.prenderApagarLuz = function () {
        if (this.luz) {
            console.log("Luz Prendida");
        }
        else {
            console.log("Luz apagada");
        }
    };
    RelojDeportivo.prototype.activarCronometro = function () {
        console.log("\"00:01min06\"");
    };
    RelojDeportivo.prototype.getLuz = function () {
        return this.luz;
    };
    RelojDeportivo.prototype.setLuz = function (luz) {
        this.luz = luz;
    };
    return RelojDeportivo;
}(reloj_1["default"]));
console.log("--------------------Reloj Deportivo---------------------");
var relojDeportivo1 = new RelojDeportivo(9000, 17, "analogico", false);
relojDeportivo1.mostrarInfo();
relojDeportivo1.darHora();
relojDeportivo1.setHora(10);
relojDeportivo1.darHora();
