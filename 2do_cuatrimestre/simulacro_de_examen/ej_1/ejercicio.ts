//Ejercicio 1:
//Con todo lo aprendido hasta el momento optimizar el siguiente codigo,
//-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta 
//ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).


class Animal{         //Hice la clase padre Animal para que sea heredada por diferentes animales, determinando el nombre desde esta clase
    protected name: string;
 constructor(name: string) {
   this.name = name;
 }
 public makeSound(): void {
  console.log ('');
  }

}

class Dog extends Animal {
 constructor(name: string) {
    super(name)
 }
 public makeSound(): void {//polimorfismo de la clase padre
   console.log ('-----DOG-------\n'+this.name+':  wuff wuff\n');
 }
 
}

class Cat extends Animal {
 constructor(name: string) {
    super(name)
   this.name = name;
 }
  public makeSound(): void {//polimorfismo de la clase padre
   console.log(' -----CAT-------\n'+this.name+':  meow meow\n');
 }
}

let minino: Cat = new Cat('Pocky');
minino.makeSound()//-> meow meow

let firulais: Dog = new Dog('Toby');
firulais.makeSound(); // -> wuff wuff