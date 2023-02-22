import Medico from './Medico';
import Paciente from './Paciente';
import Horario from './Horario';
import GestorDeArchivos from './GestorDeArchivos';

export default class Turno{
    private medico:Medico
    private paciente:Paciente
    private horario:Horario
    private numeroDeTurno:number


    constructor(medico:Medico, paciente:Paciente, horario:Horario,numeroDeTurno:number){
        this.medico=medico
        this.paciente=paciente
        this.horario=horario
        this.numeroDeTurno=numeroDeTurno
    }


    public getMedico():Medico{
        return this.medico
    }
    public getPaciente():Paciente{
        return this.paciente
    }
    public getHorario():Horario{
        return this.horario
    }
    public getNumeroDeTurno():number{
        return this.numeroDeTurno
    }
    public setMedico(medico:Medico){
        this.medico=medico
    }
    public setPaciente(paciente:Paciente){
        this.paciente=paciente
    }
    public setHorario(horario:Horario){
        this.horario=horario
    }
    public setNumeroDeTurno(numeroDeTurno:number){
        this.numeroDeTurno=numeroDeTurno
    }

    
}
