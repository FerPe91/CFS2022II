export default class Avion{
    color:string;
    ruedas:number;
    cantidadAsientos:number
    verificacionTecnica:boolean
    velocidad:number

    public constructor(color:string,ruedas:number,cantidadAsientos:number,verificacionTecnica:boolean,velocidad:number){
        this.color=color
        this.ruedas=ruedas
        this.cantidadAsientos=cantidadAsientos
        this.verificacionTecnica=verificacionTecnica
        this.velocidad=velocidad
    }

    public acelerar(){
        console.log("El avion esta acelarando a"+ this.velocidad);
        
    }
    public despegar(){
        console.log("El avion esta despegando...")
    }
    public aterrizar(){
        console.log("El avion esta aterrizando...")

    }

    public getColor(){
        return this.color
    }
    public getRuedas(){
        return this.ruedas
    }
    public getCantidadDeAsientos(){
        return this.cantidadAsientos
    }
    public getVerificacionTecnica(){
        return this.verificacionTecnica
    }
    public getVelocidad(){
        return this.velocidad
    }
    public setColor(color:string){
        this.color=color
    }
    public setRuedas(ruedas:number){
        this.ruedas=ruedas
    }
    public setCantidadDeAsientos(cantAsi:number){
        this.cantidadAsientos=cantAsi
    }
    public setVerificacionTecnica(verifTec:boolean){
        this.verificacionTecnica=verifTec
    }
    public setVelocidad(velocidad:number){
        this.velocidad=velocidad
    }

    

}

    //color, ruedas, cantidadDeAsientos, verificacionTecnica, velocidad
let avioneta =new Avion("negro",5,6,true,350)

console.log("\n------------------avioneta---------------------- \n")
console.log(avioneta)
avioneta.acelerar()
avioneta.despegar()
avioneta.aterrizar()