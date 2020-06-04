import { Component, OnInit, Inject } from "@angular/core";
import { LessonService } from "src/app/_services/teacher_services/lesson.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Combo } from 'src/app/models/combo';
import { Lesson } from 'src/app/models/Teacher/Modules/Lesson';
@Component({
  selector: "app-add-lesson",
  templateUrl: "./add-lesson.component.html",
  styleUrls: ["./add-lesson.component.scss"],
})
export class AddLessonComponent implements OnInit {
  nombrelesson = "";
  numero:number=0;
  typeSelected:number;
  imageSelected:number;
  types:Combo[]=[];
  images:Combo[]=[];
  imageUrl: string = "/assets/default.png";
  fileToUpload: File = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servLes: LessonService,
    private dialogRef: MatDialogRef<AddLessonComponent>
  ) {}

  ngOnInit(): void {
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
    this.numero=this.dataDialog['numero'];
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
  aceptar() {
    this.agregarLeccion();
    // var idCurso=this.dataDialog['idCurso'];
    // var images=this.dataDialog['images'];
    // var numero_temas=this.dataDialog['numero_tema'];
    // let newTheme=new Theme();
    // newTheme.idCurso=idCurso;
    // newTheme.idImagen=images[0].idTemaImagen;
    // newTheme.nombreTema=this.nombreTema;
    // newTheme.numeroTema=numero_temas
    // this.servThe.addTheme(newTheme).subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //     if(data.status==200){
    //       this.servThe.getThemes(idCurso).subscribe({
    //         next:(data)=>{
    //           if(data.status==200){
    //             this.dialogRef.close(data.body);
    //           }
    //           else{
    //             this.dialogRef.close();
    //           }
    //         },
    //         error:(error)=>{
    //           this.dialogRef.close();
    //           console.log("No se pudieron actualizar los temas");
    //         }
    //       });
    //     }
    //   },
    //   error:(error)=>{
    //     console.log(error);
    //   }
    // });
  }
  agregarLeccion(){
      let newLes=new Lesson();

      newLes.nombre=this.nombrelesson;
      newLes.idTipoLeccion=String(this.typeSelected);
      newLes.idImagen=String(this.imageSelected);
      newLes.numeroLeccion=this.numero;
      newLes.idTema=this.dataDialog['idTema'];
    this.servLes.addLesson(newLes).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.servLes.getLessons(this.dataDialog['idTema']).subscribe({
            next:(data)=>{     
              console.log(data);           
                  this.dialogRef.close(data.body);
            },
            error:(error)=>{
              console.log(error);
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
