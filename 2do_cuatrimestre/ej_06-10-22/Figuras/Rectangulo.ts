import cuadrado from './Cuadrado';
class Rectangulo extends cuadrado{
    protected lado2:number;
    public constructor(lado:number, lado2:number){
        super(lado)
        this.lado2=lado2

    }

    public calcularPerimetro(){
        console.log("El perimetro es de:"+(this.lado*2+this.lado2*2)+" mts.");   
    }

    public calcularArea(){
        console.log("El Area es de:"+this.lado*this.lado2+" mts.");
        
    }

    public getLado(){
        return this.lado
    }
    public getLado2(){
        return this.lado2
    }

    public setLado(lado:number){
        this.lado=lado
    }
    public setLado2(lado2:number){
        this.lado2=lado2
    }

}

console.log('\n------Rectangulo------\n ')

let rectangulo1:Rectangulo  =new Rectangulo(5,3)
console.log(rectangulo1)
rectangulo1.calcularPerimetro()
rectangulo1.calcularArea()