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
  disableTextbox =  true;
  constructor(@Inject(MAT_DIALOG_DATA) public dataDialog: any,
  private servThe:ThemesService,
  private dialogRef: MatDialogRef<ConfigureThemeComponent>) {}
  cargarDatos(){
        this.nombre=this.dataDialog['tema'].nombreTema;
        if(this.dataDialog['tema'].estado==1){

          this.radioButtonValue="enable";
        }
        else{
          this.radioButtonValue="unable";
    
        }
  }
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  ngOnInit(): void {
    this.cargarDatos();
    console.log(this.radioButtonValue);
  }
  accept() {
      this.modificarTema();
    
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
 
}

