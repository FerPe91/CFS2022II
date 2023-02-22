export default class Paciente{
    private nombre:string
    private apellido:string
    private dni:number;
    private telefono:number;
    private obraSocial:string


    constructor(nombre:string, apellido:string, dni:number, telefono:number, obraSocial:string){
        this.nombre=nombre
        this.apellido=apellido
        this.dni=dni
        this.telefono=telefono
        this.obraSocial=obraSocial
    }

    public getNombre():string{
        return this.nombre
    }
    public getApellido():string{
        return this.apellido
    }
    public getDni():number{
        return this.dni
    }
    public getTelefono():number{
        return this.telefono
    }
    public getObraSocial():string{
        return this.obraSocial
    }
    public setNombre(nombre:string){
        this.nombre=nombre
    }
    public setApellido(apellido:string){
        this.apellido=apellido
    }
    public setDni(dni:number){
        this.dni=dni
    }
    public setTelefono(telefonmo:number){
        this.telefono=this.telefono
    }
    public setObraSocial(obraSocial:string){
        this.obraSocial=obraSocial
    }

}