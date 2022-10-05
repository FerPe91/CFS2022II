var Auto = /** @class */ (function () {
    function Auto(color, cantidadDePuertas, estaPrendido, caja) {
        this.color = color;
        this.cantidadDePuertas = cantidadDePuertas;
        this.estaPrendido = estaPrendido;
        this.caja = caja;
    }
    Auto.prototype.prenderAuto = function () {
        console.log("auto encendido");
        return this.estaPrendido = true;
    };
    Auto.prototype.apagarAuto = function () {
        console.log("auto apagado");
        return this.estaPrendido = false;
    };
    Auto.prototype.mostrarInfo = function () {
        return console.log("El auto es de color: ".concat(this.color, ", cuenta con: ").concat(this.cantidadDePuertas, " puertas, tiene transmision: ").concat(this.caja, ". esta el motor prendido?: ").concat(this.estaPrendido));
    };
    return Auto;
}());
var auto1 = new Auto("Negro", 4, true, "Automatica");
auto1.apagarAuto();
console.log(auto1.mostrarInfo());
auto1.prenderAuto();
console.log(auto1.mostrarInfo());
