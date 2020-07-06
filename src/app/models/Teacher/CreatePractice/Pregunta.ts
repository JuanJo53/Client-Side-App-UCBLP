export class Pregunta{   
    tipo:boolean; 
    numeroPreg:number;
    puntuacion: number;
    pregunta: string="";
    opciones:string[]=[""];
    grupo:String;
    respuesta:any[]=[0];
    respuestasBool:boolean[]=[true];
    idTipoPregunta:string="1";
    idTipoRespuesta:string="1";
    recurso:string;
    bloqpunt:boolean=false;
    bloqpreg:boolean=false;
    bloqopci:boolean=false;
    bloqidtp:boolean=false;
    bloqidtr:boolean=false;
}