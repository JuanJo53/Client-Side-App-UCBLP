export class Pregunta{    
    numeroPreg:number;
    puntuacion: number=0;
    pregunta: string="";
    opciones:string[]=[""];
    grupo:String;
    respuesta:number[]=[0];
    idTipoPregunta:number;
    idTipoRespuesta:number;
    recurso:string;
    bloqpunt:boolean=false;
    bloqpreg:boolean=false;
    bloqopci:boolean=false;
    bloqidtp:boolean=false;
    bloqidtr:boolean=false;
}