
//crud: create, read, update, delete
import Especialidad from './class/Especialidad';
import Medico from './class/Medico';
import * as readlineSync from 'readline-sync'
import * as readFileSync from 'readline-sync'
import Paciente from './class/Paciente';
import Horario from './class/Horario';

//funciones extras

export function crearNumRamdom(max :number) {
    return Math.floor(Math.random() * max);   //Math.floor 
}



function mostrarDatosFechaHora(arreglo:Array<Horario>){
    for(let i:number=0;i<arreglo.length;i++){
        console.log(`${i+1}) ${arreglo[i].getFecha().toUpperCase()} -> ${arreglo[i].getHora()}hs.\n `)
    }
}


function mostrarNombre(arr:Array<Especialidad>){
    for(let i:number=0;i<arr.length;i++){
        console.log(`${i+1}) ${arr[i].getNombre().toUpperCase()}\n `)
    }
} 
function mostrarArregloMedicos(arr:Array<Medico>){
    for(let i:number=0;i<arr.length;i++){
        console.log(`${i+1})  ${arr[i].getNombre().toUpperCase()}     ${arr[i].getMatricula()}  ${arr[i].getEspecialidad().getNombre()}\n `)
    }
} 

//==============================================================================================================
//==========================================FUNCIONES PARA ESPECIALIDADES=======================================
//==============================================================================================================

export function cargarEspecialidades(arreglo: Array<Especialidad>, especialidad:string):Array<Especialidad>{//cargar al txt
    let nuevaEspecialidad:Especialidad= new Especialidad(especialidad)
    arreglo.push(nuevaEspecialidad)

    return arreglo
}

//Funcion crear especialidad
export function crearEspecialidad(arreglo:Array<Especialidad>): Especialidad{
    let nuevaEspecialidad :string =readlineSync.question("ingrese nueva especialidad:").toUpperCase()
    let especialidad :Especialidad= new Especialidad(nuevaEspecialidad);
    arreglo.push(especialidad)

    return especialidad
}

//Funcion Modificar especialidad
export function modificarEspecialidad(arreglo:Array<Especialidad>){

    console.log("---------------MODIFICAR ESPECIALIDAD-----------------------")
    let op1: number=1   
    while(op1>-1 || op1<2){//while para que por lo menos no rompa o el codigo cuando ingrese un valor mayor
        if(op1==0){
            break
        }else{
            op1 = Number(readFileSync.question("INGRESE LA OPCION: \n1)MODIFICAR \n2)VER ESPECIALIDADES \n0)Menu Principal\n"));
            switch(op1){
                case 1:
                    console.log(">>>>MODIFICAR DATOS<<<<\n ");
                    mostrarNombre(arreglo)
                    let op2: number = Number(readFileSync.question("INGRESE LA OPCION: "));

                    while (op2<=0 || op2>arreglo.length){//while para que maneje el rango entre 1 y longitud de arreglo
                        console.log(`NO EXISTE ESPECIALIDAD PARA VALOR INGRESADO\nUTILICE MAYOR A: ---> 0 y MENOR A: ---> ${arreglo.length}\n`);
                        mostrarNombre(arreglo) //muestro el arreglo para elegir el valor
                        op2 = Number(readFileSync.question("INGRESE LA OPCION: "));    
                    }
                    //muestro por consola los cambios realizados
                    let nombreViejoANuevo:string=arreglo[op2-1].getNombre()+"-->"
                    console.log(`\n  Modificando:--->(${arreglo[op2-1].getNombre()}) `)
                    let nombreNuevo: string = readFileSync.question("Nuevo nombre de ESPECIALIDAD: ")
                    arreglo[op2-1].setNombre(nombreNuevo)
                    nombreViejoANuevo+=arreglo[op2-1].getNombre()
                    console.log("\n Se Modifico:\n          "+nombreViejoANuevo.toUpperCase()+"\n \n ")
                    break

                case 2:
                    console.log(">>>>VER DATOS<<<<\n");
                    mostrarNombre(arreglo)
                    break
                case 0:
                    break

                    
            }  
        }
    }
    
}    


export function borrarEspecialidad(arreglo:Array<Especialidad>, especialidad:string){ 
    for (let i:number=0; i<arreglo.length;i++){
        if(especialidad == arreglo[i].getNombre()){
            arreglo.splice(i,1)
            break
        }else{
            console.log("Esta especialidad no existe")
        }
    }
}

export function verMenuEspecialidades(arreglo:Array<Especialidad>){
    let opEspecialidad:number=1;
    while(opEspecialidad>0 && opEspecialidad<5){
        console.log("------------------MENU ESPECIALIDADES--------------------");
        console.log("ingrese una opcion: \n");
        console.log("   1)Cargar Nueva Especialidad\n   2)Modificar Especialidad\n   3)Borrar Especialidad\n   0)Menu Principal\n");
        opEspecialidad=Number(readlineSync.question("ingrese una opcion: "))
        console.clear()
        switch(opEspecialidad){
            case 1:
                crearEspecialidad(arreglo)
                break
            case 2:
                modificarEspecialidad(arreglo)
                break

            case 3:
                console.log(arreglo)
                let valor:string =readlineSync.question("Ingrese la especialidad a BORRAR: ")
                borrarEspecialidad(arreglo, valor)
                console.log(arreglo)
                break
            
            default:
                break
        }


    }
}
//==============================================================================================================
//==========================================FUNCIONES PARA MEDICOS==============================================
//==============================================================================================================


export function crearMedico(arreglo:Array<Medico>, arregloEspecialidad:Array<Especialidad>){
    let nombreMedico:string=readlineSync.question("Ingrese Nombre")
    let matricula:number=Number(readlineSync.question("\nIngrese Numero de Matricula\n"))
    mostrarNombre(arregloEspecialidad)
    let especialidad:number=Number(readlineSync.question("\nElija Especialidad\n"))
    let nuevoMedico:Medico=new Medico(nombreMedico, matricula, arregloEspecialidad[especialidad])

    arreglo.push(nuevoMedico)

    return arreglo
}



export function cargarMedicos(arreglo: Array<Medico>,arregloEspecialidad:Array<Especialidad>, medico:string):Array<Medico>{//cargar al txt
    let datos : string[]= medico.split(",");//Mario, 163564;Maria, 789755,
    let nombre : string= datos[0]
    let matricula: number = Number(datos[1])
    let espe: Especialidad= arregloEspecialidad[crearNumRamdom(arregloEspecialidad.length)]

    let nuevoMedico: Medico= new Medico(nombre, matricula,espe);
    arreglo.push(nuevoMedico)

    return arreglo
}


export function modificarMedicos(arreglo:Array<Medico>){

    console.log("---------------MODIFICAR MEDICOS-----------------------")
    let op1: number=1   
    while(op1>-1 || op1<2){//while para que por lo menos no rompa o el codigo cuando ingrese un valor mayor
        if(op1==0){
            break
        }else{
            op1 = Number(readFileSync.question("INGRESE LA OPCION: \n1)MODIFICAR MEDICOS \n2)VER MEDICOS \n0)SALIR\n"));
            switch(op1){
                case 1:
                    console.log(">>>>MODIFICAR DATOS<<<<\n ");
                    mostrarArregloMedicos(arreglo)
                    let op2: number = Number(readFileSync.question("INGRESE LA OPCION: "));

                    while (op2<=0 || op2>arreglo.length){//while para que maneje el rango entre 1ylongitud de arreglo
                        console.log(`NO EXISTE MEDICO PARA VALOR INGRESADO\nUTILICE MAYOR A: ---> 0 y MENOR A: ---> ${arreglo.length}\n`);
                        mostrarArregloMedicos(arreglo)
                        op2 = Number(readFileSync.question("INGRESE LA OPCION: "));    
                    }

                    //muestro los datos modificados
                    let nombreViejoANuevo:string=arreglo[op2-1].getNombre()+"-->"
                    console.log(`\n  Modificando:--->(${arreglo[op2-1].getNombre()}) `)
                    let nombreNuevo: string = readFileSync.question("Nuevo nombre de MEDICO: ")
                    arreglo[op2-1].setNombre(nombreNuevo)
                    nombreViejoANuevo+=arreglo[op2-1].getNombre()
                    console.log("\n Se Modifico:\n          "+nombreViejoANuevo.toUpperCase()+"\n \n ")
                    break
                case 2:
                    console.log(">>>>VER DATOS<<<<\n");
                    console.log("N°|  Nombre  |Matricula|Especialidad\n");
                    mostrarArregloMedicos(arreglo) 
                    break
                    
            }  
        }
    }
    
}  

//Mario, 163564, Traumatologo;Maria, 789755,
export function borrarMedico(arreglo:Array<Medico>){

    console.log(arreglo)
    let matricula:number=Number(readlineSync.question("ingrese una MATRICULA del MEDICO a BORRAR: "))
    for (let i:number=0; i< arreglo.length;i++){
        if (matricula==arreglo[i].getMatricula()){
            arreglo.splice(i,1)
        }else{
            return "no existe tal matricula"
        }
    }
}

export function verMenuMedicos(arreglo:Array<Medico>, arregloEspecialidad:Array<Especialidad>){
    let opMedico:number=1;
    while(opMedico>0 && opMedico<5){
        console.log("------------------MENU MEDICOS--------------------");
        console.log("ingrese una opcion: ");
        console.log("1)Cargar Nuevo medico\n2)Modificar Medico\n3)Borrar Medico\nOtro)Salir");
        opMedico=Number(readlineSync.question("ingrese una opcion: "))
        switch(opMedico){
            case 1:
                crearMedico(arreglo, arregloEspecialidad)
                break
            case 2:
                modificarMedicos(arreglo)
                break
            case 2:
                borrarMedico(arreglo)
                break
            default:
                console.log("")
                break
        }
    }
}


//==============================================================================================================
//==========================================FUNCIONES PARA PACIENTES============================================
//==============================================================================================================

export function cargarPaciente(arreglo: Array<Paciente>,paciente:string):Array<Paciente>{//cargar al txt
    let datos : string[]= paciente.split(",");//Mario, Camieta, 15658698, OSDE; Josefina, Rodriguez, 40236587, OSPRERA;
    let nombre : string= datos[0]
    let apellido : string= datos[1]
    let dni: number = Number(datos[2])
    let telefono: number = Number(datos[3])
    let obraSocial: string = datos[4]

    let nuevoPaciente: Paciente = new Paciente(nombre,apellido, dni, telefono, obraSocial);
    arreglo.push(nuevoPaciente)

    return arreglo
}
export function crearPacientes(arreglo:Array<Paciente>): Paciente{
    let nuevoNombre :string =readlineSync.question("ingrese NOMBRE del nuevo PACIENTE");
    let nuevoApellido :string =readlineSync.question("ingrese APELLIDO del nuevo PACIENTE");
    let nuevoDni :number =(readlineSync.question("ingrese  DNI"));
    let nuevoTelefono :number=Number(readlineSync.question("ingrese un TELEFONO"));
    let nuevaObraSocial :string =readlineSync.question("ingrese Obra Social");
    let paciente :Paciente= new Paciente(nuevoNombre, nuevoApellido, nuevoDni,nuevoTelefono, nuevaObraSocial);
    arreglo.push(paciente)
    return paciente
}

export function borrarPaciente(arreglo:Array<Paciente>){
    console.log(arreglo)
    let dni:number =Number(readlineSync.question("Ingrese la DNI del PACIENTE a BORRAR "))
    if(arreglo.length==0){
        console.log(">>>>>NINGUN PACIENTE CARGADO<<<<<<")
    }
    for (let i:number=0; i< arreglo.length;i++){
        console.log(arreglo.length)
        if (dni==arreglo[i].getDni()){
            arreglo.splice(i,1)
        }else{
            return "Ningun cliente relacionado al nro. de DNI ingresado"
        }
    }
    console.log(arreglo)
}


export function verMenuPacientes(arreglo:Array<Paciente>){
    let opPacientes:number=1;
    while(opPacientes>0 && opPacientes<5){
        console.log("------------------MENU PACIENTES--------------------");
        console.log("ingrese una opcion: \n");
        console.log("1)Cargar Nuevo Paciente\n2)Borrar Paciente");
        opPacientes=Number(readlineSync.question("ingrese una opcion: \n"))
        switch(opPacientes){
            case 1:
                crearPacientes(arreglo)
                break
            case 2:
                borrarPaciente(arreglo)
                break
            default:
                console.log("")
                break
        }


    }
}
//==============================================================================================================
//==========================================FUNCIONES PARA HORARIOS============================================
//==============================================================================================================

export function cargarHorarios(arreglo: Array<Horario>, horarios:string):Array<Horario>{//cargar al txt
    let FechaYHora : string[]= horarios.split(",");
    let fecha: string=FechaYHora[0]
    let hora: number=Number(FechaYHora[1])

    let nuevoHorario : Horario= new Horario(fecha, hora)
    arreglo.push(nuevoHorario)

    return arreglo
}


export function creaHorario(arreglo:Array<Horario>):Array<Horario>{
    //hacer variables dias, mes y año para concatenar en nueva fecha. Lo mismo con Horas y minutos en Nuevo Horario
    let nuevafecha : string= readlineSync.question("Ingrese Fecha del turno")
    let nuevoHorario : number= 0
    console.log("Horarios de atencion: 8hs - 19hs");
    nuevoHorario = Number(readlineSync.question("Ingrese Horario del turno"))
    while(nuevoHorario<8 || nuevoHorario>19){
        console.log("Horarios de atencion: 8hs - 19hs");
        nuevoHorario = Number(readlineSync.question("Horario incorrecto, ingrese nuevamente"))
    }
    let nuevaFechaYHorario:Horario=new Horario(nuevafecha, nuevoHorario)
    arreglo.push(nuevaFechaYHorario)
    
    return arreglo
}


//modificar borrar.
export function borrarFechaYHora(arreglo:Array<Horario>){
    console.log(arreglo)
    let Horario:number =Number(readlineSync.question("Horario que desea ELIMINAR"))
    if(arreglo.length==0){
        console.log(">>>>>NINGUN HORARIO CARGADO<<<<<<")
    }
    for (let i:number=0; i< arreglo.length;i++){
        console.log(arreglo.length)
        if (Horario==arreglo[i].getHora()){
            arreglo.splice(i,1)
        }else{
            return "Ningun HORARIO cargado, relacionado a la HORA ingresada"
        }
    }
    console.log(arreglo)
} 


export function verMenuHoraYFecha(arreglo:Array<Horario>){
   
    let opHoraFecha:number=1;
    while(opHoraFecha>0 && opHoraFecha<5){
        console.log("------------------MENU HORA Y FECHA--------------------");
        console.log("ingrese una opcion: \n");
        console.log("1)Cargar nuevo Horario y Fecha\n2)Borrar Horario y Fecha\n3)Ver Horarios y Fechas\n");
        opHoraFecha=Number(readlineSync.question("ingrese una opcion: \n"))
        switch(opHoraFecha){
            case 1:
                creaHorario(arreglo)
                break
            case 2:
                borrarFechaYHora(arreglo)
                break
            case 3:
                mostrarDatosFechaHora(arreglo)
                break
            default:
                console.log("")
                break
        }
    }
}

