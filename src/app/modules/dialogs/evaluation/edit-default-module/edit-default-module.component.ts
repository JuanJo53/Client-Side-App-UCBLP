import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EvaluationService } from 'src/app/_services/teacher_services/evaluation.service';
import { Module } from 'src/app/models/Teacher/Evaluation/Module';

@Component({
  selector: 'app-edit-default-module',
  templateUrl: './edit-default-module.component.html',
  styleUrls: ['./edit-default-module.component.scss']
})
export class EditDefaultModuleComponent implements OnInit {
  newModulo:Module=new Module();
  nombre:string="";
  radioButtonValue:string="";
  disableTextbox =  true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<EditDefaultModuleComponent>, 
    private moduServ:EvaluationService){}
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  ngOnInit(): void {
    this.newModulo=this.dataDialog["modulo"];
    console.log(this.dataDialog["modulo"]);
    this.nombre=this.newModulo.nombreModulo;
    if(this.newModulo.estado==2){
      this.radioButtonValue="unable";
    }
    else{
      this.radioButtonValue="enable";
    }
  }
  aceptar(){
    if(this.radioButtonValue==="unable"){
      this.newModulo.estado=2;
    }
    else{
      this.newModulo.estado=1;
    }
    this.newModulo.nombreModulo=this.nombre;
    this.moduServ.updateModulePred(this.newModulo).subscribe({
      next: (data) => {
        if(data.status==200){            
          this.moduServ.getModules(this.dataDialog['idCurso']).subscribe({
            next:(data2)=>{
                if(data2.status==200){
                    this.dialogRef.close(data2.body);
                }
                else{                
                  this.dialogRef.close();
                }
            },
            error:(error)=>{
              this.dialogRef.close();
            }
          });
        }
        else{
          console.log("error");
          this.dialogRef.close();
        }
      },
      error: (error) => {
        console.log("error");
        this.dialogRef.close()
      },
    });
  }
  cancelar(){
    this.dialogRef.close()
  }

}
