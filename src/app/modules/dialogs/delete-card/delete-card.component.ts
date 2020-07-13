import { Component, OnInit, Inject } from "@angular/core";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { MyClassService } from "src/app/_services/teacher_services/my-class.service";
import { timeInterval } from "rxjs/operators";
import { ThemesService } from "src/app/_services/teacher_services/themes.service";
import { LessonService } from "src/app/_services/teacher_services/lesson.service";
import { SectionsService } from 'src/app/_services/teacher_services/sections.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EvaluationService } from 'src/app/_services/teacher_services/evaluation.service';
@Component({
  selector: "app-delete-card",
  templateUrl: "./delete-card.component.html",
  styleUrls: ["./delete-card.component.scss"],
})
export class DeleteCardComponent implements OnInit {
  item: string = "card";
  constructor(
    private data: DeleteItemService,
    @Inject(MAT_DIALOG_DATA)
    public dataDialog: any,
    private servEst: MyClassService,
    private servLes: LessonService,
    private servTh: ThemesService,
    private servSecc:SectionsService,
    private servMod:EvaluationService,
    private dialogRef: MatDialogRef<DeleteCardComponent>
  ) { }
  ngOnInit(): void {
    this.item = this.dataDialog["tipo"];
  }
  aceptar() {
    console.log(this.dataDialog);
    switch (this.dataDialog["tipo"]) {
      case "student":
        this.eliminarAlumno();
        break;
      case "theme":
        this.eliminarTema();
        break;
      case "lesson":
        this.eliminarLeccion();
        break;
      case "forum":
        this.eliminarForum();
        break;
      case "forum_response":
        this.eliminarRespuestaForum();
        break;
      case "section":
        this.eliminarSeccionRecursos();
        break;
      case "File":
        this.eliminarDocumentoRecursos();
        break;
      case "Custom Module":
        this.eliminarModuloPersonalizado();
        break;  
    }
  }

  //FUncion para eliminar Alumno
  eliminarAlumno() {
    this.servEst
      .removeStudentsGeneral(this.dataDialog["id_alumno_curso"])
      .subscribe({
        next: (data) => {
          console.log(data);
          if (data["text"] === "El alumno ha sido eliminado con éxito") {
            console.log("se elimino correctamente al estudiante");
            this.dialogRef.close("ok");
          } else {
            console.log("error");
            this.dialogRef.close();
          }
        },
        error: (err) => {
          console.log(err);
          console.log("error");
          this.dialogRef.close();
        },
      });
  }

  //Funcion para eliminar temas
  eliminarTema() {
    this.servTh.delThemes(this.dataDialog["idTema"]).subscribe({
      next: (data) => {
        console.log(data);
        if (data.status == 200) {
          console.log("se elimino correctamente al estudiante");
          this.dialogRef.close("ok");
        } else {
          console.log("error");
          this.dialogRef.close();
        }
      },
      error: (err) => {
        console.log(err);
        console.log("error");
        this.dialogRef.close();
      },
    });
  }

  //Funcion para eliminar leccion
  eliminarLeccion() {
    this.servLes.delLesson(this.dataDialog["idLec"]).subscribe({
      next: (data) => {
        console.log(data);
        if (data.status == 200) {
          console.log("se elimino correctamente al estudiante");
          this.dialogRef.close("ok");
        } else {
          console.log("error");
          this.dialogRef.close();
        }
      },
      error: (err) => {
        console.log(err);
        console.log("error");
        this.dialogRef.close();
      },
    });
  }

  //eliminar forum
  eliminarForum() { }
  //eliminar respeusta de forum
  eliminarRespuestaForum() { }
  //eliminar modulo personalizado
  eliminarModuloPersonalizado() { 
      this.servMod.deleteModule(this.dataDialog["idModulo"]).subscribe({
        next: (data) => {
          if(data.status==200){
            this.dialogRef.close("ok")
          }
          else{
            console.log("error");
            this.dialogRef.close()
          }
        },
        error: (error) => {
          console.log(error);
          this.dialogRef.close()
        },
      });
  }


  //Eliminar seccion 
  eliminarSeccionRecursos() { 
    this.servSecc.delSection(this.dataDialog["idSeccion"]).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.dialogRef.close("ok");

        }
        else{
          this.dialogRef.close();
        }
      },
      error:(error)=>{
        this.dialogRef.close();
      }

    })
  }
  eliminarDocumentoRecursos() { 
    this.servSecc.delResource(this.dataDialog["id"]).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.dialogRef.close("ok");
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
}
