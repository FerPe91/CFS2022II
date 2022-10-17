export default class Cuadrado{
    protected lado:number;
    public constructor(lado:number){
        this.lado=lado
    }

    public calcularPerimetro(){
        console.log("El Perimetro es de: "+ this.lado*4+" mts.")
       
    }

    public calcularArea(){
        console.log("El Area es de: "+ Math.pow(this.lado,2)+"mts")
    }

    public getLado(){
        return this.lado
    }

    public setLado(lado:number){
        this.lado=lado
    }

}

console.log('\n------Cuadrado------\n ')

let cuadrado1:Cuadrado =new Cuadrado(5)
console.log(cuadrado1)
cuadrado1.calcularArea()
cuadrado1.calcularPerimetro()