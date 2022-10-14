//Ejercicio 1:
//Con todo lo aprendido hasta el momento optimizar el siguiente codigo,
//-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta 
//ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log('');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('-----DOG-------\n' + this.name + ':  wuff wuff\n');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        console.log(' -----CAT-------\n' + this.name + ':  meow meow\n');
    };
    return Cat;
}(Animal));
var minino = new Cat('Pocky');
minino.makeSound(); //-> meow meow
var firulais = new Dog('Toby');
firulais.makeSound(); // -> wuff wuff
