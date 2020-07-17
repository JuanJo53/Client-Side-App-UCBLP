import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContenidoModuloService } from 'src/app/_services/teacher_services/contenido-modulo.service';
import { Module } from 'src/app/models/Teacher/Evaluation/Module';
import { ContentModule } from 'src/app/models/Teacher/Modules/ContentModule';

@Component({
  selector: "app-add-card",
  templateUrl: "./add-card.component.html",
  styleUrls: ["./add-card.component.scss"],
})
export class AddCardComponent implements OnInit {
  nombreCard: string = "";
  disableTextbox = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<AddCardComponent>,
    private serv:ContenidoModuloService
  ) {}
  ngOnInit(): void {}
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  aceptar(){
  let newcont=new ContentModule();
 newcont.nombreContenido=this.nombreCard;
 newcont.rubrica=0;
 newcont.idModulo=this.dataDialog["idModulo"];
   this.serv.addContenidoModulos(newcont).subscribe({
     next:(data)=>{
      if(data.status==200){
        this.dialogRef.close(newcont);
      }
      else{
        this.dialogRef.close();
      }
     },
    error:(err)=>{
        this.dialogRef.close();
    }
   })
  }
  cancelar(){

  }
}
