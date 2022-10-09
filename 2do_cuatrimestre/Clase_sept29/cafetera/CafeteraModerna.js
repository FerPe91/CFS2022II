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
var Cafetera_1 = require("./Cafetera");
var CafeteraModerna = /** @class */ (function (_super) {
    __extends(CafeteraModerna, _super);
    function CafeteraModerna(color, capsula, estado, temperatura) {
        var _this = _super.call(this, color, capsula, estado) || this;
        _this.temperatura = temperatura;
        return _this;
    }
    CafeteraModerna.prototype.hacerCafe = function () {
        if (this.estado == true) {
            console.log("HACIENDO CAFE..\nEspere...\n3 segundos\n2 segundos\n1 segundo\nCafe listo");
        }
        else {
            console.log("Te olvidaste de prender la cafetera");
        }
    };
    CafeteraModerna.prototype.mostrarInfo = function () {
        console.log("la cafetera SMART de color ".concat(this.color, " esta ").concat(this.prenderApagar(), " la temperatura es de ").concat(this.temperatura, " grados "));
    };
    CafeteraModerna.prototype.getTemperatura = function () {
        console.log(this.temperatura);
    };
    CafeteraModerna.prototype.SetTemperatura = function (temperatura) {
        this.temperatura = temperatura;
    };
    return CafeteraModerna;
}(Cafetera_1["default"]));
var cafeteraSmart = new CafeteraModerna("Roja", true, false, 100);
cafeteraSmart.SetTemperatura(10);
cafeteraSmart.mostrarInfo();
cafeteraSmart.hacerCafe();
