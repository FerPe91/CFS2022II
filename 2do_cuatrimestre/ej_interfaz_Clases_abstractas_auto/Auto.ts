//INTERFAZ AUTO
interface autoInterface{
    marca:string;
    añoDeFabricacion:number,
    velocidadMaxima:number;

    encenderMotor():void
    apagarMotor():void
    acelerar():void;
}
//AUTO CARRERA
class AutoCarrera implements autoInterface{
    marca:string="Ferrari"
    añoDeFabricacion:number=2020
    velocidadMaxima:number=360

    constructor(marca:string, añoDeFabricacion:number, velocidadMaxima:number){
        this.marca=marca;
        this.añoDeFabricacion=añoDeFabricacion
        this.velocidadMaxima=velocidadMaxima
    }


    encenderMotor():void{
        console.log("BRRRRMMM..brm..brm..brm");
        
    }
    apagarMotor():void{
        console.log("motor Apagado");
    }
    acelerar():void{
        console.log("acelerando..");
        
        for(let i:number=1;i=this.velocidadMaxima;i+60){
            console.log(`velocimetro en:${i}kmts p/h`);
        }
    }
}

//AUTO FAMILIAR
class AutoFamiliar implements autoInterface{
    marca:string="Fiat"
    añoDeFabricacion:number=2014
    velocidadMaxima:number=140

    constructor(marca:string, añoDeFabricacion:number, velocidadMaxima:number){
        this.marca=marca;
        this.añoDeFabricacion=añoDeFabricacion
        this.velocidadMaxima=velocidadMaxima
    }


    encenderMotor():void{
        console.log("BRRRRMMM..brm..brm..brm");
        
    }
    apagarMotor():void{
        console.log("motor Apagado");
    }
    acelerar():void{
        console.log("acelerando..");
        
        for(let i:number=1;i=this.velocidadMaxima;i+60){
            console.log(`velocimetro en:${i}kmts p/h`);
        }
    }
}

let autoCarrera1=new AutoCarrera;
let autoFamiliar1=new AutoFamiliar;

console.log(autoCarrera1)
console.log(autoFamiliar1)