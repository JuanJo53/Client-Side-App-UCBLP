import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EvaluationService } from 'src/app/_services/teacher_services/evaluation.service';
import { Module } from 'src/app/models/Teacher/Evaluation/Module';
import { CardClassroom } from 'src/app/models/Teacher/CardClassroom';

@Component({
  selector: 'app-modules-rubric',
  templateUrl: './modules-rubric.component.html',
  styleUrls: ['./modules-rubric.component.scss']
})
export class ModulesRubricComponent implements OnInit {
  valor=30;
  disableTextbox =  true;
  listaRubricas:any[]=[];
  porcentajes:any[]=[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<ModulesRubricComponent>, 
    private moduServ:EvaluationService) { }
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  cargarDatos(rubricas){
    for(let rubrica of rubricas){
      let newRubrica=new Module();
      newRubrica.id=rubrica.id_modulo;
      newRubrica.rubrica=rubrica.rubrica;

      newRubrica.nombreModulo=rubrica.nombre_modulo;
      this.listaRubricas.push(newRubrica);
      this.porcentajes.push({
        porcentaje:rubrica.rubrica
      })
    }
    console.log(this.porcentajes);
  }
  ngOnInit(): void {
    this.listaRubricas=this.dataDialog["modulos"];
  }
  verificarRubricas(){
    var sum=0;
    for(let rubrica of this.listaRubricas){
      console.log(rubrica);
      sum+=rubrica.rubrica;
    }
    if(sum!=100){
      return false;
    }
    else{
      return true;
    }
  }
  aceptar():void{
    if(this.verificarRubricas()){
      this.moduServ.updateRubricas(this.listaRubricas).subscribe({
        next:(data)=>{
          if(data.status==200){
            this.dialogRef.close(this.listaRubricas);
          }
          else{          
            console.log("error");
            this.dialogRef.close();
          }
        },
        error:(error)=>{
          console.log("error");
          this.dialogRef.close();
  
        }
      })
    }
  }
  cancelar(){
    this.dialogRef.close();
  }

}
