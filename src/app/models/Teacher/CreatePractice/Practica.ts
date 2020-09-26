import { Time } from '@angular/common';

export class Practica{
  id:number;
  tiempoLimite:number=10;
  numero:number;
  idLeccion:string;
  fechainiDate:any=new Date();
  fechafinDate:any=new Date();;
  fechaini:any;
  fechafin:any;
  horaini:any;
  horafin:any;
  nombre:string="";
  bloqfecha1:boolean=false;
  bloqfecha2:boolean=false;
  bloqhora1:boolean=false;
  bloqhora2:boolean=false;
  bloqnombre:boolean=false;
  bloqtiempo:boolean=false;
}