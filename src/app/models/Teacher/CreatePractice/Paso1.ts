import { Time } from '@angular/common';

export class Config1{
    fechaini:Date=new Date();
  fechafin:Date=new Date();;
  horaini:Time;
  horafin:Time;
  nombre:string="";
  bloqfecha1:boolean=false;
  bloqfecha2:boolean=false;
  bloqhora1:boolean=false;
  bloqhora2:boolean=false;
  bloqnombre:boolean=false;
}