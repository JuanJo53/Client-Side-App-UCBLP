import { Component, OnInit, Inject } from "@angular/core";
import { ModulesService } from "src/app/_services/teacher_services/modules.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: "app-add-lesson",
  templateUrl: "./add-lesson.component.html",
  styleUrls: ["./add-lesson.component.scss"],
})
export class AddLessonComponent implements OnInit {
  nombrelesson = "";
  imageUrl: string = "/assets/default.png";
  fileToUpload: File = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servThe: ModulesService,
    private dialogRef: MatDialogRef<AddLessonComponent>
  ) {}

  ngOnInit(): void {}
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
}
