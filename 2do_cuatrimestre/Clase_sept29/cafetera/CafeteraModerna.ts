import Cafetera from './Cafetera';

class CafeteraModerna extends Cafetera{
    protected temperatura:number
    public constructor(color:string, capsula:boolean, estado:boolean, temperatura:number){
        super(color, capsula, estado)
        this.temperatura=temperatura
    }

    public hacerCafe(){
        if(this.estado==true){
            console.log("HACIENDO CAFE..\nEspere...\n3 segundos\n2 segundos\n1 segundo\nCafe listo")
        }else{
            console.log("Te olvidaste de prender la cafetera")           
        }
    }

    public mostrarInfo(){
        console.log(`la cafetera SMART de color ${this.color} esta ${this.prenderApagar()} la temperatura es de ${this.temperatura} grados `)
    }

    public getTemperatura(){
        console.log(this.temperatura)
    }
    public SetTemperatura(temperatura:number){
        this.temperatura=temperatura
    }




}


let cafeteraSmart =new CafeteraModerna("Roja", true, false,100)
cafeteraSmart.SetTemperatura(10)
cafeteraSmart.mostrarInfo()
cafeteraSmart.hacerCafe()

