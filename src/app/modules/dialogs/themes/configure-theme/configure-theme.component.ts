import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThemesService} from 'src/app/_services/teacher_services/themes.service';
import { LessonService } from 'src/app/_services/teacher_services/lesson.service';

@Component({
  selector: "app-configure-theme",
  templateUrl: "./configure-theme.component.html",
  styleUrls: ["./configure-theme.component.scss"],
})
export class ConfigureThemeComponent implements OnInit {
  nombre: string = "";
  tipo:string="";
  radioButtonValue: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public dataDialog: any,
  private servThe:ThemesService,
  private servLes:LessonService,
  private dialogRef: MatDialogRef<ConfigureThemeComponent>) {}
  cargarDatos(){

    switch(this.tipo){
      case "Theme":
        
        this.nombre=this.dataDialog['tema'].nombreTema;
        if(this.dataDialog['tema'].estado==1){

          this.radioButtonValue="enable";
        }
        else{
          this.radioButtonValue="unable";
    
        }
        break;
      case "Lesson":
        console.log(this.dataDialog);
        this.nombre=this.dataDialog['leccion'].nombre;
        if(this.dataDialog['leccion'].estado==1){

          this.radioButtonValue="enable";
        }
        else{
          this.radioButtonValue="unable";
    
        }
        break;
    }
  }
  ngOnInit(): void {
    this.tipo=this.dataDialog['tipo'];
    this.cargarDatos();
    console.log(this.radioButtonValue);
  }
  accept() {
    switch(this.tipo){
      case "Theme":
        this.modificarTema();
        break;
      case "Lesson":
        this.modificarLeccion();
        break; 
    }
  }
  modificarTema(){
    if(this.radioButtonValue==="enable"){
      this.dataDialog['tema'].estado=1;
    }
    else{
      this.dataDialog['tema'].estado=2;}
    
      this.dataDialog['tema'].nombreTema=this.nombre;
    this.servThe.updateThemes(this.dataDialog['tema']).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.servThe.getThemes(this.dataDialog['idCurso']).subscribe({
            next:(data)=>{                
                  this.dialogRef.close(data.body);
            },
            error:(error)=>{
              this.dialogRef.close();

            }
          });
        }
        else{
          console.log("No se pudo Actualizar el tema");
          this.dialogRef.close();
        }
      },
      error:(error)=>{
        console.log("No se pudo Actualizar el tema");
        this.dialogRef.close();
      }

    });
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
}
