import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { LessonService } from "src/app/_services/teacher_services/lesson.service";
@Component({
  selector: "app-configure-lesson",
  templateUrl: "./configure-lesson.component.html",
  styleUrls: ["./configure-lesson.component.scss"],
})
export class ConfigureLessonComponent implements OnInit {
  nombre: string = "";
  radioButtonValue: string = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servLes: LessonService,
    private dialogRef: MatDialogRef<ConfigureLessonComponent>
  ) {}
  ngOnInit(): void {
    this.cargarDatos();
  }
  accept() {
   this.modificarLeccion();
  }
  modificarLeccion(){
    if(this.radioButtonValue==="enable"){
      this.dataDialog['leccion'].estado=1;
    }
    else{
      this.dataDialog['leccion'].estado=2;}
    
      this.dataDialog['leccion'].nombre=this.nombre;
      this.dataDialog['leccion'].idTipoLeccion=this.dataDialog['types'][0].idTipo;
    this.servLes.updateLesson(this.dataDialog['leccion']).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.servLes.getLessons(this.dataDialog['idTema']).subscribe({
            next:(data)=>{                
                  this.dialogRef.close(data.body);
            },
            error:(error)=>{
              this.dialogRef.close();

            }
          });
        }
        else{
          console.log("No se pudo Actualizar la Leccion");
          this.dialogRef.close();
        }
      },
      error:(error)=>{
        console.log("No se pudo Actualizar la Leccion");
        this.dialogRef.close();
      }

    });
  }

  cargarDatos(){

        this.nombre=this.dataDialog['leccion'].nombre;
        if(this.dataDialog['leccion'].estado==1){

          this.radioButtonValue="enable";
        }
        else{
          this.radioButtonValue="unable";
    
        }
  }
}
