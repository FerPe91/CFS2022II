/*Ejercicio 3:
Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos,
 una instancia de dicha clase, y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede.*/
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
var equipoDeSonido = /** @class */ (function () {
    function equipoDeSonido(parlantes, estado, valor) {
        this.parlantes = parlantes;
        this.estado = estado;
        this.valor = valor;
    }
    equipoDeSonido.prototype.mostraInfo = function () {
        console.log("El equipo cuenta con ".concat(this.parlantes, " parlantes de alta fidelidad cuenta con un valor de ").concat(this.valor, " "));
    };
    equipoDeSonido.prototype.prenderApagar = function () {
        if (this.estado == true) {
            console.log("el equipo esta PRENDIDO");
        }
        else {
            console.log("el equipo esta APAGADO");
        }
    };
    equipoDeSonido.prototype.getParlantes = function () {
        return this.parlantes;
    };
    equipoDeSonido.prototype.setParlantes = function (parlantes) {
        this.parlantes = parlantes;
    };
    equipoDeSonido.prototype.getEstado = function (estado) {
        this.estado = estado;
    };
    equipoDeSonido.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    equipoDeSonido.prototype.getValor = function () {
        return this.valor;
    };
    equipoDeSonido.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    return equipoDeSonido;
}());
var radioComunacha1 = new equipoDeSonido(1, true, 5000);
console.log(radioComunacha1);
var HomeTheater = /** @class */ (function (_super) {
    __extends(HomeTheater, _super);
    function HomeTheater(parlantes, estado, valor, usb) {
        var _this = _super.call(this, parlantes, estado, valor) || this;
        _this.usb = usb;
        return _this;
    }
    HomeTheater.prototype.mostraInfo = function () {
        if (this.usb === true) {
            console.log("El equipo cuenta con ".concat(this.parlantes, " parlantes de alta fidelidad, conexion a USB, cuenta con un valor de ").concat(this.valor));
        }
        else {
            console.log("El equipo cuenta con ".concat(this.parlantes, " parlantes de alta fidelidad cuenta con un valor de ").concat(this.valor));
        }
    };
    return HomeTheater;
}(equipoDeSonido));
var HomeTheater1 = new HomeTheater(5, true, 1500, true);
var HomeTheater2 = new HomeTheater(5, true, 1500, false);
console.log(HomeTheater1);
console.log(HomeTheater2);
