import cuadrado from './Cuadrado';
class trianguloEquilatero extends cuadrado{
    protected lado3:number
    public constructor(lado:number){
        super(lado)
    }

    public calcularPerimetro(){
        console.log( "El perimetro es: "+ (this.lado*3)+" mts.")
    }

    public calcularArea(){
       console.log("El perimetro es de: "+((this.lado*this.lado)/2)+" mts.");   
    }

    public getLado(){
        return this.lado
    }
   

    public setLado(lado:number){
        this.lado=lado
    }
}

console.log('\n------Triangulo------\n ')

let triangulo1 =new trianguloEquilatero(5)
console.log(triangulo1)
triangulo1.calcularArea()
triangulo1.calcularPerimetro()