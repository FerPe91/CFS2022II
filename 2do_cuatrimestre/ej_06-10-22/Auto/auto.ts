import auto from "./auto"

export default class Auto{
    protected velocidad:number
    protected motor:string

    public constructor(velocidad:number, motor:string){
        this.velocidad=velocidad
        this. motor=motor
    }

    public acelerar(){
        console.log("Acelerando..")
        let kms:number=0;
        for(let i = 0; i<=5;i++){
            kms=kms+18
            console.log(kms+"Km/h")
        }
       
    }

    protected getVelocidad(){
        return this.velocidad
    }
    protected getMotor(){
        return this.motor
    }

    protected setVelocidad(velocidad:number){
        this.velocidad=velocidad
    }

}

let auto1=new Auto(91,"1.7")
console.log(auto1)
auto1.acelerar()