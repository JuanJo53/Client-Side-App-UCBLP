import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContenidoModuloService } from 'src/app/_services/teacher_services/contenido-modulo.service';
import { ContentModule } from 'src/app/models/Teacher/Modules/ContentModule';

@Component({
  selector: "app-edit-card",
  templateUrl: "./edit-card.component.html",
  styleUrls: ["./edit-card.component.scss"],
})
export class EditCardComponent implements OnInit {
  nombreCard: string = "";
  disableTextbox = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<EditCardComponent>,
    private serv:ContenidoModuloService
    ) {}

  ngOnInit(): void {
    this.nombreCard=this.dataDialog["contenido"].nombreContenido;
  }
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  aceptar() {
    let updCard=new ContentModule();
    updCard.id=this.dataDialog["contenido"].id;
    updCard.nombreContenido=this.nombreCard;
    this.serv.updateContenidoModulos(updCard).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.dataDialog["contenido"].nombreContenido=this.nombreCard;
          this.dialogRef.close(this.dataDialog["contenido"]);
        }else{
          console.log("error");
          this.dialogRef.close();
        }
      },
      error:(err)=>{
        console.log(err);
        this.dialogRef.close();

      }
    })
  }
  cancelar() {
    this.dialogRef.close();
  }
}
