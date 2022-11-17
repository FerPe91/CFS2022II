import * as fs from 'fs';
import * as readFileSync from 'readline-sync'
export default class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');//Se crea una variable donde se guardara los datos del archivo "txt"
        this.arregloString = archivoTxt.split(';');  //vamoS a tener nuestro "objetos" separados por ; 
    }


    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    } 

}




