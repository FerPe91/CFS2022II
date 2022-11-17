//punto 3: crear e implementar una interfaz en una clase

interface basquetbolistaInterface{
    nombre:string;
    altura:number;
    posicion:string;

    picarPelota():void
    tirarAlAro():void
}

class JugadorDeBasquet implements basquetbolistaInterface{
    nombre="Lebron james";
    altura=203;
    posicion="alero";

    picarPelota():void{
        console.log(`${this.nombre} pica y traslada la pelota`);
        
    }

    tirarAlAro():void{
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

let jugadorDeBasquet1=new JugadorDeBasquet
console.log(jugadorDeBasquet1);
