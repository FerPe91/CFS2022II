var CdMusical = /** @class */ (function () {
    function CdMusical(interprete, cantidadDeCanciones, añoLanzamiento) {
        this.interprete = interprete;
        this.cantidadDeCanciones = cantidadDeCanciones;
        this.añoLanzamiento = añoLanzamiento;
    }
    CdMusical.prototype.getInterprete = function () {
        return this.interprete;
    };
    CdMusical.prototype.getCantidadDeCanciones = function () {
        return this.cantidadDeCanciones;
    };
    CdMusical.prototype.getAñoLanzamiento = function () {
        return this.añoLanzamiento;
    };
    CdMusical.prototype.setInterprete = function (interprete) {
        this.interprete;
    };
    CdMusical.prototype.setCantidadDeCanciones = function (cantidadDeCanciones) {
        this.cantidadDeCanciones = cantidadDeCanciones;
    };
    CdMusical.prototype.setAñoLanzamiento = function () {
        this.añoLanzamiento = this.añoLanzamiento;
    };
    return CdMusical;
}());
var cd1 = new CdMusical("La renga", 12, 2002);
var disckman = /** @class */ (function () {
    function disckman(marca, valor, cd) {
        this.marca = marca;
        this.valor = valor;
        this.cd = cd;
    }
    disckman.prototype.mostrarInfo = function () {
        console.log("el disckman ".concat(this.marca, " esta reproduciendo el un cd de ").concat(this.cd.getInterprete, " "));
    };
    return disckman;
}());
var disckman1 = new disckman("sony", 1000, cd1);
console.log(disckman1);
