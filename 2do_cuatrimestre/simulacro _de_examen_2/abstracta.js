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
var jugador = /** @class */ (function () {
    function jugador() {
    }
    jugador.prototype.calificarActuacion = function () {
        console.log("el jugador".concat(this.nombre, " del equipo ").concat(this.equipo, " tuvo una actuacion de ").concat(this.valoracion, " puntos"));
    };
    return jugador;
}());
var jugadorDeFutbol = /** @class */ (function (_super) {
    __extends(jugadorDeFutbol, _super);
    function jugadorDeFutbol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nombre = "Pablo Mouche";
        _this.equipo = "barraca central";
        _this.numero = 27;
        _this.valoracion = 6;
        return _this;
    }
    jugadorDeFutbol.prototype.presentarJugador = function () {
        return "bienvenido ".concat(this.nombre, " a ").concat(this.equipo);
    };
    return jugadorDeFutbol;
}(jugador));
var jugador1 = new jugadorDeFutbol();
console.log(jugador1.presentarJugador());
jugador1.calificarActuacion();
