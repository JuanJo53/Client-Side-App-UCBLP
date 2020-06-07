import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { LessonService } from "src/app/_services/teacher_services/lesson.service";
import { Combo } from 'src/app/models/combo';
@Component({
  selector: "app-configure-lesson",
  templateUrl: "./configure-lesson.component.html",
  styleUrls: ["./configure-lesson.component.scss"],
})
export class ConfigureLessonComponent implements OnInit {
  nombre: string = "";
  numero:number=0;
  radioButtonValue: string = "";
  typeSelected:number;
  imageSelected:number;
  types:Combo[]=[];
  images:Combo[]=[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servLes: LessonService,
    private dialogRef: MatDialogRef<ConfigureLessonComponent>
  ) {}
  disableTextbox =  true;

  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
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
      this.dataDialog['leccion'].idTipoLeccion=this.typeSelected;
      this.dataDialog['leccion'].idImage=this.imageSelected;
      this.dataDialog['leccion'].numeroLeccion=this.numero;
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
  compareObjects(o1: any, o2: number): boolean {
    return o1.value == o2 ;
  }
  cargarDatos(){
        for(let i in this.dataDialog['images']){
          this.images.push(
            { value: this.dataDialog['images'][i].idImagen, display: this.dataDialog['images'][i].url}
          )
        }
        for(let i in this.dataDialog['types']){
          this.types.push(
            { value: this.dataDialog['types'][i].idTipo, display: this.dataDialog['types'][i].tipo}
          )
        }
        this.imageSelected=this.dataDialog['leccion'].idImagen;
        this.typeSelected=this.dataDialog['leccion'].idTipoLeccion;;
        this.nombre=this.dataDialog['leccion'].nombre;
        this.numero=this.dataDialog['leccion'].numeroLeccion;
        
        if(this.dataDialog['leccion'].estado==1){

          this.radioButtonValue="enable";
        }
        else{
          this.radioButtonValue="unable";
    
        }
  }
}
