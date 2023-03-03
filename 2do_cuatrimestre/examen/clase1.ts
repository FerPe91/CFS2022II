
//consigna 1 crear la clase con al menmos 2 atributos y dos metodos
class jugadorDeBasquet{
    public nombre:string;
    public altura:number;
    public posicion:string;

    constructor(nombre:string, altura:number, posicion:string){
        this.nombre=nombre;
        this.altura=altura;
        this.posicion=posicion;
    }

    getNombre():string{
        return this.nombre
    }
    getaltura():number{
        return this.altura
    }
    getPosicion():string{
        return this.posicion
    }

    setNombre(nombre:string):void{
        this.nombre=nombre
    }
    setAltura(altura:number):void{
        this.altura=altura
    }
    setPosicion(posicion:string):void{
        this.posicion=posicion
    }
    

    public picarPelota():void{
        console.log(`${this.nombre} pica y traslada la pelota`);
        
    }

    public tirarAlAro():void{
        let chances:number=Math.floor(Math.random() * 100);
        console.log(`va ${this.nombre}...`);
        
        if(chances>0 && chances<20){
            console.log(`Tiro errado`);        
        }else if(chances>=20 && chances<65){
            console.log("Encesto de 2 (DOS PUNTOS)");      
        }else{
            console.log("Encesto de 3 (TRES PUNTOS)");
        }
         
    }
    

}


//consigna 2 crear objeto

let bastquebolista1: jugadorDeBasquet=new jugadorDeBasquet("Manuel Ginobili", 198, "alero-base")
console.log(bastquebolista1);
bastquebolista1.picarPelota()
bastquebolista1.tirarAlAro()
