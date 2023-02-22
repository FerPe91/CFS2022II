import GestorDeArchivos from './class/GestorDeArchivos';
import Especialidad from './class/Especialidad';
import Medico from './class/Medico';
import { cargarEspecialidades, crearEspecialidad, borrarEspecialidad, modificarEspecialidad, cargarMedicos, borrarMedico, verMenuEspecialidades, cargarPaciente, verMenuPacientes, verMenuMedicos, verMenuHoraYFecha, cargarHorarios } from './funciones';
import * as readlineSync from 'readline-sync';
import Paciente from './class/Paciente';
import Horario from './class/Horario';
///-------------------------------------------------------------------------------------------------------------------------------------------------------

let arregloEspecialidad : Array<Especialidad>=[] //creo arreglo para las especialidades del txt
let datosEspecialidad: GestorDeArchivos = new GestorDeArchivos('./txt/especialidad.txt')//le paso ruta para leer archivos


for(let i : number=0; i<datosEspecialidad.getArregloString().length; i++){
    cargarEspecialidades(arregloEspecialidad, datosEspecialidad.getArregloString()[i])
}

//=====================MEDICOS=============================
//Mario, 163564, Traumatologo;Maria, 789755,
let arregloMedicos: Array<Medico> = []
let datosMedicos: GestorDeArchivos=new GestorDeArchivos('./txt/medicos.txt')

for (let i : number =0;i< datosMedicos.getArregloString().length; i++){
    cargarMedicos(arregloMedicos,arregloEspecialidad, datosMedicos.getArregloString()[i])
}
console.log(arregloMedicos)

//=====================PACIENTES=============================

let arregloPacientes:Array<Paciente>=[]
let datosPacientes: GestorDeArchivos=new GestorDeArchivos('./txt/pacientes.txt')

for(let i : number=0; i<datosPacientes.getArregloString().length; i++){
    cargarPaciente(arregloPacientes, datosPacientes.getArregloString()[i])
}

//=====================HORARIO=============================

let arregloHorarios:Array<Horario>=[]
let datosHorarios:GestorDeArchivos=new GestorDeArchivos('./txt/horarios.txt')

for(let i : number=0; i<datosHorarios.getArregloString().length; i++){
    cargarHorarios(arregloHorarios,datosHorarios.getArregloString()[i])
}


/*------------------------------------------MENU DE OPCIONES---------------------------------------*/
let opcion :number=1;

while(opcion>0 && opcion<5){
    console.log("------------------------------------------MENU PRINCIPAL DE OPCIONES---------------------------------------")
    console.log("ingrese una opcion: \n");
    console.log("    1)Menu especialidades\n    2)Menu Medicos\n    3)Menu Pacientes\n    4)Menu Hora y Fecha\n");
    opcion=Number(readlineSync.question("ingrese una opcion:"))
    console.clear()
    switch(opcion){
        case 1:
            verMenuEspecialidades(arregloEspecialidad)
            break
        case 2://medicos
            verMenuMedicos(arregloMedicos, arregloEspecialidad)
            break
        case 3:
            verMenuPacientes(arregloPacientes)
            break
        case 4:
            verMenuHoraYFecha(arregloHorarios)
            break
        default:
            break
    }

}