import Auto from './auto';

class AutoDeCarreras extends Auto{

    protected numeroDeAuto: number

    public constructor(velocidad:number, motor:string, numeroDeAuto:number){
        super(velocidad, motor)
        this.numeroDeAuto=numeroDeAuto;
    }

    public acelerar(){
        console.log("Acelerando..")
        let kms:number=0;
        for(let i = 0; i<=5;i++){
            kms=kms+50
            console.log(kms+"Km/h")
        }
       
    }

    protected getNumeroDeAuto(){
        return this.numeroDeAuto
    }

}

let autoDeCarreras1=new AutoDeCarreras(100,"v8",1)
console.log(autoDeCarreras1)
autoDeCarreras1.acelerar()