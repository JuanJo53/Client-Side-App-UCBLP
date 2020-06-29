import { Time } from '@angular/common';

export class Config1{
  numero:number;
  idLeccion:string;
  fechaini:any=new Date();
  fechafin:any=new Date();;
  horaini:any;
  horafin:any;
  nombre:string="";
  bloqfecha1:boolean=false;
  bloqfecha2:boolean=false;
  bloqhora1:boolean=false;
  bloqhora2:boolean=false;
  bloqnombre:boolean=false;
}