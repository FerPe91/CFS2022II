//Crear una clase Abstracta
//Crear una relación de herencia


abstract class jugador{
    abstract nombre:string
    abstract equipo:string
    abstract numero:number
    abstract valoracion: number

    abstract presentarJugador():string
    calificarActuacion(){
        console.log(`el jugador${this.nombre} del equipo ${this.equipo} tuvo una actuacion de ${this.valoracion} puntos`);
    }
}


class jugadorDeFutbol extends jugador{
    nombre="Pablo Mouche"
    equipo="barraca central"
    numero=27
    valoracion=6

    presentarJugador():string{
        return `bienvenido ${this.nombre} a ${this.equipo}`
    }

}


const jugador1 = new jugadorDeFutbol();
console.log(jugador1.presentarJugador());
 
jugador1.calificarActuacion()
