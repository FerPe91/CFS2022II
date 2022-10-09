export default class Cafetera{
    protected color:string;
    protected capsula:boolean;
    public estado:boolean;

    public constructor(color:string, capsula:boolean, estado:boolean){
        this.color=color
        this.capsula=capsula
        this.estado=estado
    }

    public prenderApagar(){
        if(this.estado==true){
            return"PRENDIDA"
        }else{
            return"APAGADA";
        }
    }
    protected hacerCafe():void{
        console.log("Se esta haciendo el cafe")
    }
    public mostrarInfo(){
        console.log(`la cafetera modelo BASE de color ${this.color} esta ${this.prenderApagar()}`)
    }


    protected getColor(){
        return this.color
    }
    protected getCapsula(){
        return this.capsula
    }
    protected getEstado(){
        return this.estado
    }
   
    protected setColor(color:string):void{
        this.color=color
    }
    protected setCapsula(capsula:boolean):void{
        this.capsula=capsula
    }
    protected setEstado(estado:boolean):void{
        this.estado=estado
    }
}

let nuevaCafetera = new Cafetera("Azul", true,true)
nuevaCafetera.mostrarInfo()


