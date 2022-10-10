import Avion from "./Avion";
class AvionDePasajeros extends Avion{
    cantTurbinas:number
    desde:string //desde y hasta son lugares de salida y de llegada. Ej: desde: buenos aires  hasta: tierra del fuego
    hasta:string


    //color, ruedas, cantidadDeAsientos, verificacionTecnica, velocidad
    public constructor(color:string,ruedas:number,cantidadAsientos:number,verificacionTecnica:boolean,velocidad:number, cantTurbinas:number, desde:string, hasta:string){
        super(color,ruedas,cantidadAsientos,verificacionTecnica,velocidad)
        this.cantTurbinas=cantTurbinas
        this.desde=desde
        this.hasta=hasta
    }

    public avisoDeSalida(){
        console.log(`Señores pasajeros estamos por emprender vuelo desde ${this.desde} con destino a ${this.hasta} , permanezcan en sus asientos hasta avisar que la fase de despegue este realizada`)
    }
    public avisoDeLlegada(){
        console.log(`Señores pasajeros vuelo con destino a ${this.hasta} proximo a finalizar, entrando en fase de arterrizaje, permanezca en sus asientos`)
    }
    

    public getCantidadDeTurbinas(){
        return this.cantTurbinas
    }
    public getDesde(){
        return this.desde
    }
    public getHasta(){
        return this.hasta
    }
    public setCantidadDeTurbinas(cantDeTur:number){
        this.cantTurbinas=cantDeTur
    }
    public setDesde(desde:string){
        this.desde=desde
    }
    public setHasta(hasta:string){
        this.hasta=hasta
    }

}



//configuro los valores desde variables
let color:string="blanco"
let ruedas:number=10
let cantidadDeAsientos:number=200
let verificacionTecnica:boolean=true
let velocidad:number=600
let cantidadDeTurbinas=4
let desde:string="Cordoba Capital"
let hasta:string="Salta"

let avionDeAerolineas1 = new AvionDePasajeros(color,ruedas, cantidadDeAsientos, verificacionTecnica,velocidad,cantidadDeTurbinas, desde, hasta)


console.log("\n------------------avionDeAerolineas1---------------------- \n")
console.log(avionDeAerolineas1)
avionDeAerolineas1.avisoDeSalida()
avionDeAerolineas1.avisoDeLlegada()