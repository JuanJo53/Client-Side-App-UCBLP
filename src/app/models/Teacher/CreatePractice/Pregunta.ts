export class Pregunta{   
    respuestaAl:any[]=[];
    id:number;
    tipo:number=0; 
    nivel:number;
    numeroPreg:number;
    puntuacion: number;
    pregunta: string="";
    opciones:any[]=[""];
    grupo:String;
    respuesta:any[]=[];
    respuestasBool:any[]=[true];
    idTipoPregunta:string="1";
    idTipoRespuesta:string="1";
    idHabilidad:number=1;
    recurso:string;
    recursoFile:File;
    bloqpunt:boolean=false;
    bloqpreg:boolean=false;
    bloqopci:boolean=false;
    bloqidtp:boolean=false;
    bloqidtr:boolean=false;
    bloqRec:boolean=false;
}