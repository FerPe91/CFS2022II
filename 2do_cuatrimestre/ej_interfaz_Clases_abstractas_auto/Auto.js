//AUTO CARRERA
var AutoCarrera = /** @class */ (function () {
    function AutoCarrera(marca, añoDeFabricacion, velocidadMaxima) {
        this.marca = "Ferrari";
        this.añoDeFabricacion = 2020;
        this.velocidadMaxima = 360;
        this.marca = marca;
        this.añoDeFabricacion = añoDeFabricacion;
        this.velocidadMaxima = velocidadMaxima;
    }
    AutoCarrera.prototype.encenderMotor = function () {
        console.log("BRRRRMMM..brm..brm..brm");
    };
    AutoCarrera.prototype.apagarMotor = function () {
        console.log("motor Apagado");
    };
    AutoCarrera.prototype.acelerar = function () {
        console.log("acelerando..");
        for (var i = 1; i = this.velocidadMaxima; i + 60) {
            console.log("velocimetro en:".concat(i, "kmts p/h"));
        }
    };
    return AutoCarrera;
}());
//AUTO FAMILIAR
var AutoFamiliar = /** @class */ (function () {
    function AutoFamiliar(marca, añoDeFabricacion, velocidadMaxima) {
        this.marca = "Fiat";
        this.añoDeFabricacion = 2014;
        this.velocidadMaxima = 140;
        this.marca = marca;
        this.añoDeFabricacion = añoDeFabricacion;
        this.velocidadMaxima = velocidadMaxima;
    }
    AutoFamiliar.prototype.encenderMotor = function () {
        console.log("BRRRRMMM..brm..brm..brm");
    };
    AutoFamiliar.prototype.apagarMotor = function () {
        console.log("motor Apagado");
    };
    AutoFamiliar.prototype.acelerar = function () {
        console.log("acelerando..");
        for (var i = 1; i = this.velocidadMaxima; i + 60) {
            console.log("velocimetro en:".concat(i, "kmts p/h"));
        }
    };
    return AutoFamiliar;
}());
var autoCarrera1 = new AutoCarrera;
var autoFamiliar1 = new AutoFamiliar;
console.log(autoCarrera1);
console.log(autoFamiliar1);
