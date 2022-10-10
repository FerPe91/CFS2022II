export default class reloj{
    protected valor:number;
    protected hora:number
    protected digitalOAnalogico:string

    public constructor(valor:number,hora:number,digitalOAnalogico:string){
        this.valor=valor
        this.hora=hora
        this.digitalOAnalogico=digitalOAnalogico
    }

    
    public darHora():void{
        if(this.hora>12){
            console.log("la hora es:"+this.hora+ "pm")

        }else{
            console.log("la hora es:"+this.hora +"am") 
        }
        
    }
    public mostrarInfo(){
        console.log(`El reloj es, ${this.digitalOAnalogico} esta en la hora ${this.hora}, tiene un valor de $ ${this.valor}`)
    }

    public getHora(){
        return this.hora
    }

    public getDigitalOAnalogico(){
        return this.digitalOAnalogico
    }

    public getValor(){
        return this.valor
    }

    public setHora(hora:number):void{
        console.log("Cambiando la hora...")
        this.hora=hora
    }
    public setValor(valor:number):void{
        this.valor=valor
    }
    public setDigitalOAnalogico(digitalOAnalogico:string):void{
        this.digitalOAnalogico=digitalOAnalogico
    }



}

let reloj1=new reloj(5000, 11, "analogico")
reloj1.mostrarInfo()
reloj1.darHora()
reloj1.setHora(4)
reloj1.setValor(18000)
reloj1.mostrarInfo()
reloj1.darHora();
