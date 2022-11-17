//-----------------CLASE ABTRACTA------------------

abstract class VehiculoBase{
    private color:string;
    private velocidadMaxima:number
    private endendidoApagado:boolean
    
    constructor(color:string, velocidadMaxima:number, encendidoApagado:boolean){
        this.color=color
        this.velocidadMaxima=velocidadMaxima
        this.endendidoApagado=encendidoApagado
    }

    abstract encenderMotor():void
    abstract apagarMotor():void
    abstract acelerar():void
}


//-----------------AUTO CIUDAD------------------


class AutoCiudad extends VehiculoBase{
    private color:string;
    private velocidadMaxima:number
    private endendidoApagado:boolean
    
    constructor(color:string, velocidadMaxima:number, encendidoApagado:boolean){
        super(color, velocidadMaxima,encendidoApagado)
    }

    encenderMotor():void{
        console.log("auto encendido");
        
    }
    apagarMotor():void{
        console.log("Auto Apagado");
    }
    acelerar():void{
        console.log("acelerando..");
        if(this.endendidoApagado){
            for(let i:number=1;i=this.velocidadMaxima;i+15){
                console.log(`velocimetro en:${i}kmts p/h`);
            }    
        }else{
            console.log(`Auto apagado, encienda el motor primero`);
        }     
    }
}

//-----------------AUTO DEPORTIVO------------------

class AutoDeportivo extends VehiculoBase{
    private color:string;
    private velocidadMaxima:number
    private endendidoApagado:boolean
    
    constructor(color:string, velocidadMaxima:number, encendidoApagado:boolean){
        super(color, velocidadMaxima,encendidoApagado)
    }

    
    encenderMotor():void{
        console.log("auto encendido");
        
    }
    apagarMotor():void{
        console.log("Auto Apagado");
    }
    acelerar():void{
        console.log("acelerando..");
        if(this.endendidoApagado){
            for(let i:number=1;i=this.velocidadMaxima;i+50){
                console.log(`velocimetro en:${i}kmts p/h`);
            }    
        }else{
            console.log(`Auto apagado, encienda el motor primero`);
        }     
    }
}


//-----------------CAMIONETA------------------


class Camioneta extends VehiculoBase{
    private color:string;
    private velocidadMaxima:number
    private endendidoApagado:boolean
    private todoTerreno:boolean;
    
    constructor(color:string, velocidadMaxima:number, encendidoApagado:boolean, todoTerreno:boolean){
        super(color, velocidadMaxima,encendidoApagado)
        this.todoTerreno=todoTerreno
    }
    
    encenderMotor():void{
        this.endendidoApagado=true;
        console.log("Camioneta encendida");
        
    }
    apagarMotor():void{
        this.endendidoApagado=false;
        console.log("Camioneta Apagada");
    }
    acelerar():void{
        console.log("Acelerando..");
        if(this.endendidoApagado){
            for(let i:number=1;i=this.velocidadMaxima;i+15){
                console.log(`velocimetro en:${i}kmts p/h`);
            }    
        }else{
            console.log(`Auto apagado, encienda el motor primero`);
        }     
    }
}


