/*Ejercicio 3:
Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos,
 una instancia de dicha clase, y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede.*/


 class equipoDeSonido{
    protected parlantes:number
    protected estado:boolean
    protected valor:number


    constructor(parlantes:number,estado:boolean, valor:number){
        this.parlantes=parlantes
        this.estado=estado
        this.valor=valor
    }

    mostraInfo(){
        console.log(`El equipo cuenta con ${this.parlantes} parlantes de alta fidelidad cuenta con un valor de ${this.valor} `)
    }

    protected prenderApagar(){
        if(this.estado==true){
            console.log("el equipo esta PRENDIDO");
            
        }else{
            console.log("el equipo esta APAGADO");
        }
    }

    protected getParlantes(){
        return this.parlantes
    }
    protected setParlantes(parlantes:number){
        this.parlantes=parlantes
    }
    protected getEstado(estado:boolean){
        this.estado=estado
    }
    protected setEstado(estado:boolean){
        this.estado=estado
    }
    protected getValor(){
        return this.valor
    }
    protected setValor(valor:number){
        this.valor=valor
    }

}



let radioComunacha1=new equipoDeSonido(1,true,5000)
console.log(radioComunacha1)

class HomeTheater extends equipoDeSonido{
    protected usb:boolean

    constructor(parlantes:number, estado:boolean, valor:number, usb:boolean){
        super(parlantes, estado,valor)
        this.usb=usb
    }

    mostraInfo(){
        if(this.usb===true){
            console.log(`El equipo cuenta con ${this.parlantes} parlantes de alta fidelidad, conexion a USB, cuenta con un valor de ${this.valor}`)
        }else{
            console.log(`El equipo cuenta con ${this.parlantes} parlantes de alta fidelidad cuenta con un valor de ${this.valor}`)
        }
        
    }



}


let HomeTheater1= new HomeTheater(5, true, 1500, true)
let HomeTheater2= new HomeTheater(5, true, 1500, false)

console.log(HomeTheater1)
console.log(HomeTheater2)