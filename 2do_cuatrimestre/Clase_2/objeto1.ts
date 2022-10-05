class Cocina{
    color:string;
    tamanio:string;
    cantDeHornallas:number;


    mostrarInfo(){
        console.log(`La info es: color ${this.color}, tamaño: ${this.tamanio}, Cantidad de Hornallas: ${this.cantDeHornallas}`)
    }

    prenderHornalla(){
        console.log("")
    }
    calentar(){
        console.log("")
    }
    hornear(){
        console.log("")
    }


    constructor(color:string, tamanio:string,cantDeHornallas:number){
        this.color=color
        this.tamanio=tamanio
        this.cantDeHornallas=cantDeHornallas
    }    

}

let cocinaOrbis=new Cocina("blanca","mediana",4) 
console.log(cocinaOrbis.mostrarInfo())