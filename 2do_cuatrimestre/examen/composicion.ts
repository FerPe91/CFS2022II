class CdMusical {
    interprete:string;
    cantidadDeCanciones:number;
    añoLanzamiento:number

    public constructor(interprete:string, cantidadDeCanciones:number, añoLanzamiento:number){
        this.interprete=interprete
        this.cantidadDeCanciones=cantidadDeCanciones
        this.añoLanzamiento=añoLanzamiento
    }

    getInterprete():string{
        return this.interprete
    }
    getCantidadDeCanciones():number{
        return this.cantidadDeCanciones
    }
    getAñoLanzamiento():number{
        return this.añoLanzamiento
    }
    setInterprete(interprete:string):void{
        this.interprete
    }
    setCantidadDeCanciones(cantidadDeCanciones:number):void{
        this.cantidadDeCanciones=cantidadDeCanciones
    }
    setAñoLanzamiento():void{
        this.añoLanzamiento=this.añoLanzamiento
    }



}

let cd1: CdMusical= new CdMusical("La renga", 12, 2002)


class disckman{
    marca:string
    valor:number
    cd:CdMusical
    constructor(marca:string, valor:number, cd:CdMusical){
        this.marca=marca
        this.valor=valor
        this.cd=cd
    }

    prenderDispositivo(){
        console.log(`Dispositivo ${this.marca} encendido`);
        
    }
    apagarDispositivo(){
        console.log(`Apagando disckman ${this.marca}`);
    }

    mostrarInfo(){
        console.log(`el disckman ${this.marca} esta reproduciendo el un cd de ${this.cd.getInterprete} `);
        
    }

}


let disckman1: disckman=new disckman("sony",1000,cd1)


disckman1.prenderDispositivo()
console.log(disckman1);
disckman1.apagarDispositivo()
