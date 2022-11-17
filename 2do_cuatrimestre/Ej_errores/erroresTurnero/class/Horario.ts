export default  class Horario{
    private fecha:string
    private hora:number

    constructor(fecha:string, hora:number){
        this.fecha=fecha;
        this.hora=hora
    }

    public getFecha():string{
        return this.fecha
    }
    public getHora():number{
        return this.hora
    }
    public setFecha(fecha:string){
        this.fecha=fecha
    }
    public setHora(hora:number){
        this.hora=hora
    }
}