var Cocina = /** @class */ (function () {
    function Cocina(color, tamanio, cantDeHornallas) {
        this.color = color;
        this.tamanio = tamanio;
        this.cantDeHornallas = cantDeHornallas;
    }
    Cocina.prototype.mostrarInfo = function () {
        console.log("La info es: color ".concat(this.color, ", tama\u00F1o: ").concat(this.tamanio, ", Cantidad de Hornallas: ").concat(this.cantDeHornallas));
    };
    Cocina.prototype.prenderHornalla = function () {
        console.log("");
    };
    Cocina.prototype.calentar = function () {
        console.log("");
    };
    Cocina.prototype.hornear = function () {
        console.log("");
    };
    return Cocina;
}());
var cocinaOrbis = new Cocina("blanca", "mediana", 4);
console.log(cocinaOrbis.mostrarInfo());
