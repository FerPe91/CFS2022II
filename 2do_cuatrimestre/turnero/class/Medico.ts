import Especialidad from "./Especialidad";

export default class Medico  {
    private nombre:string;
    private matricula: number
    private especialidad:Especialidad

    constructor(nombre:string, matricula:number, especialidad:Especialidad){
        this.nombre=nombre
        this.matricula=matricula
        this.especialidad=especialidad
    }
    
    public getMatricula():number{
        return this.matricula
    }

    public getNombre():string{
        return this.nombre
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre
    }
    
    public getEspecialidad():Especialidad{
        return this.especialidad
    }
    public setEspecialidad(especialidad:Especialidad){
        this.especialidad=especialidad
    }

}
