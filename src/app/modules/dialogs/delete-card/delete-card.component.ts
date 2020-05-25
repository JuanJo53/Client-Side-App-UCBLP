import { Component, OnInit, Inject } from "@angular/core";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { timeInterval } from 'rxjs/operators';
@Component({
  selector: "app-delete-card",
  templateUrl: "./delete-card.component.html",
  styleUrls: ["./delete-card.component.scss"],
})
export class DeleteCardComponent implements OnInit {
  item: string = "card";
  constructor(private data: DeleteItemService,@Inject(MAT_DIALOG_DATA) public dataDialog: any,private servEst:MyClassService,private dialogRef: MatDialogRef<DeleteCardComponent>) {}
  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (nombreItem) => (this.item = nombreItem)
    );
  }
  aceptar(){
    console.log(this.dataDialog);
    this.servEst.removeStudentsGeneral(this.dataDialog['id_alumno_curso']).subscribe({
      next:(data)=>{
        console.log(data);
        if(data['text']==="El alumno ha sido eliminado con éxito"){
          console.log("se elimino correctamente al estudiante");      
          this.dialogRef.close("ok");   
        }
        else{
          console.log("error");
        }
      },
      error:(err)=>{
        console.log(err);
        console.log("error");
      }
    }
      
    );
  }
}
