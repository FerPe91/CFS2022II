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
var auto_1 = require("./auto");
var AutoDeCarreras = /** @class */ (function (_super) {
    __extends(AutoDeCarreras, _super);
    function AutoDeCarreras(velocidad, motor, numeroDeAuto) {
        var _this = _super.call(this, velocidad, motor) || this;
        _this.numeroDeAuto = numeroDeAuto;
        return _this;
    }
    AutoDeCarreras.prototype.acelerar = function () {
        console.log("Acelerando..");
        var kms = 0;
        for (var i = 0; i <= 5; i++) {
            kms = kms + 50;
            console.log(kms + "Km/h");
        }
    };
    AutoDeCarreras.prototype.getNumeroDeAuto = function () {
        return this.numeroDeAuto;
    };
    return AutoDeCarreras;
}(auto_1["default"]));
var autoDeCarreras1 = new AutoDeCarreras(100, "v8", 1);
console.log(autoDeCarreras1);
autoDeCarreras1.acelerar();
