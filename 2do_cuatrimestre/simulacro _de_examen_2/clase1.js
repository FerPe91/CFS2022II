/* Crear una clase -con al menos 2 métodos y 2 atributos-
Crear un objeto
Crear una interfaz - implementarla en una clase-
Crear una clase Abstracta
Crear una relación de herencia
Crear un ejemplo de composición */
var jugadorDeBasquet = /** @class */ (function () {
    function jugadorDeBasquet(nombre, altura, posicion) {
        this.nombre = nombre;
        this.altura = altura;
        this.posicion = posicion;
    }
    jugadorDeBasquet.prototype.picarPelota = function () {
        console.log("".concat(this.nombre, " pica y traslada la pelota"));
    };
    jugadorDeBasquet.prototype.tirarAlAro = function () {
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
    return jugadorDeBasquet;
}());
var bastquebolista1 = new jugadorDeBasquet("Manuel Ginobili", 198, "alero-base");
console.log(bastquebolista1);
bastquebolista1.picarPelota();
bastquebolista1.tirarAlAro();
