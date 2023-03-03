var JugadorDeBasquet = /** @class */ (function () {
    function JugadorDeBasquet() {
        this.nombre = "Lebron james";
        this.altura = 203;
        this.posicion = "alero";
    }
    JugadorDeBasquet.prototype.picarPelota = function () {
        console.log("".concat(this.nombre, " pica y traslada la pelota"));
    };
    JugadorDeBasquet.prototype.tirarAlAro = function () {
        var chances = Math.floor(Math.random() * 100);
        console.log("va ".concat(this.nombre, "..."));
        if (chances > 0 && chances < 20) {
            console.log("Tiro errado");
        }
        else if (chances >= 20 && chances < 65) {
            console.log("Encesto de 2 (DOS PUNTOS)");
        }
        else {
            console.log("Encesto de 3 (TRES PUNTOS)");
        }
    };
    return JugadorDeBasquet;
}());
var jugadorDeBasquet1 = new JugadorDeBasquet;
console.log(jugadorDeBasquet1);
