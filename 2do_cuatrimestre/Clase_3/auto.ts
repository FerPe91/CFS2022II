class Auto{
    private color:string
    private cantidadDePuertas:number
    public estaPrendido:boolean
    private caja:string

    public prenderAuto(){
        console.log("auto encendido")
        return this.estaPrendido=true
    }
    public apagarAuto(){
        console.log("auto apagado")
        return this.estaPrendido=false
    }
    public mostrarInfo(){
        return console.log(`El auto es de color: ${this.color}, cuenta con: ${this.cantidadDePuertas} puertas, tiene transmision: ${this.caja}. esta el motor prendido?: ${this.estaPrendido}`)
    }



    constructor(color:string, cantidadDePuertas:number,estaPrendido:boolean,caja:string){
        this.color=color;
        this.cantidadDePuertas=cantidadDePuertas
        this.estaPrendido=estaPrendido
        this.caja=caja
    }

}

let auto1=new Auto("Negro", 4,true, "Automatica" )
auto1.apagarAuto()
console.log(auto1.mostrarInfo())
auto1.prenderAuto()
console.log(auto1.mostrarInfo())
