import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ModulesService } from "src/app/_services/teacher_services/modules.service";
@Component({
  selector: "app-configure-lesson",
  templateUrl: "./configure-lesson.component.html",
  styleUrls: ["./configure-lesson.component.scss"],
})
export class ConfigureLessonComponent implements OnInit {
  nombreTema: string = "";
  radioButtonValue: string = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servThe: ModulesService,
    private dialogRef: MatDialogRef<ConfigureLessonComponent>
  ) {}
  ngOnInit(): void {
    this.nombreTema = this.dataDialog["tema"].nombreTema;
    if (this.dataDialog["tema"].estado == 1) {
      this.radioButtonValue = "enable";
    } else {
      this.radioButtonValue = "unable";
    }
    console.log(this.radioButtonValue);
  }
  accept() {
    // if(this.radioButtonValue==="enable"){
    //   this.dataDialog['tema'].estado=1;
    // }
    // else{
    //   this.dataDialog['tema'].estado=2;}
    //   this.dataDialog['tema'].nombreTema=this.nombreTema;
    // this.servThe.updateThemes(this.dataDialog['tema']).subscribe({
    //   next:(data)=>{
    //     if(data.status==200){
    //       this.dialogRef.close(this.dataDialog['tema']);
    //     }
    //     else{
    //       console.log("No se pudo Actualizar el tema");
    //       this.dialogRef.close();
    //     }
    //   },
    //   error:(error)=>{
    //     console.log("No se pudo Actualizar el tema");
    //     this.dialogRef.close();
    //   }
    // });
  }
}
