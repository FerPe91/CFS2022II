import reloj from "./reloj";
class RelojDeportivo extends reloj{
    protected luz:boolean

    public constructor(valor:number, hora:number,digitalOAnalogico:string,luz:boolean){
        super(valor,hora,digitalOAnalogico)
        this.luz=luz
    }
    
    public prenderApagarLuz(){
        if(this.luz){
            console.log("Luz Prendida")
        }else{
            console.log("Luz apagada")
        }
    }

    public activarCronometro(){
        console.log(`"00:01min06"`)
    }

    protected getLuz(){
        return this.luz
    }
    protected setLuz(luz:boolean){
        this.luz=luz
    }


}

console.log("--------------------Reloj Deportivo---------------------")

let relojDeportivo1=new RelojDeportivo(9000,17,"analogico", false )

relojDeportivo1.mostrarInfo()
relojDeportivo1.darHora()
relojDeportivo1.setHora(10)
relojDeportivo1.darHora()